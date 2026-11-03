'use client';

import { useEffect, useRef } from 'react';

type Vec3 = [number, number, number];

function createRandom(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 心室・心房は回転した楕円体で近似する
const chambers = [
  { c: [0.22, -0.25, -0.05], r: [0.62, 0.95, 0.62], a: 0.45 },
  { c: [-0.25, -0.2, 0.2], r: [0.62, 0.82, 0.5], a: 0.3 },
  { c: [-0.55, 0.5, 0.1], r: [0.42, 0.5, 0.42], a: 0 },
  { c: [0.35, 0.62, -0.25], r: [0.45, 0.36, 0.38], a: 0 },
];

// 大血管と冠動脈は折れ線に沿った管で近似する
const vessels: { points: Vec3[]; radius: number; weight: number; bright?: boolean }[] = [
  { points: [[0.05, 0.4, 0], [0, 0.95, 0.05], [-0.12, 1.35, 0], [0.25, 1.6, -0.1], [0.7, 1.4, -0.25], [0.85, 0.9, -0.4]], radius: 0.2, weight: 0.12 },
  { points: [[-0.05, 0.35, 0.3], [0.1, 0.85, 0.3], [0.4, 1.1, 0.15], [0.8, 1.05, 0]], radius: 0.17, weight: 0.07 },
  { points: [[-0.6, 0.8, 0.05], [-0.6, 1.6, 0]], radius: 0.14, weight: 0.03 },
  { points: [[-0.55, 0.05, 0], [-0.55, -0.4, -0.1]], radius: 0.14, weight: 0.015 },
  { points: [[0, 0.45, 0.6], [0.22, -0.1, 0.66], [0.5, -0.75, 0.42], [0.66, -1.12, 0.08]], radius: 0.02, weight: 0.025, bright: true },
  { points: [[-0.25, 0.3, 0.68], [-0.55, -0.2, 0.62], [-0.45, -0.75, 0.38]], radius: 0.018, weight: 0.015, bright: true },
];

function isInsideChamber(x: number, y: number, z: number, skip: number, shrink: number) {
  return chambers.some((chamber, index) => {
    if (index === skip) return false;
    const dx = x - chamber.c[0];
    const dy = y - chamber.c[1];
    const dz = z - chamber.c[2];
    const cos = Math.cos(-chamber.a);
    const sin = Math.sin(-chamber.a);
    const lx = (dx * cos - dy * sin) / (chamber.r[0] * shrink);
    const ly = (dx * sin + dy * cos) / (chamber.r[1] * shrink);
    const lz = dz / (chamber.r[2] * shrink);
    return lx * lx + ly * ly + lz * lz < 1;
  });
}

function sampleHeart(random: () => number): { position: Vec3; shade: number; bright: boolean } {
  for (;;) {
    const direction: Vec3 = [random() * 2 - 1, random() * 2 - 1, random() * 2 - 1];
    const length = Math.hypot(...direction) || 1;
    const [ux, uy, uz] = direction.map((value) => value / length);
    const pick = random();
    const vesselWeight = vessels.reduce((sum, vessel) => sum + vessel.weight, 0);

    if (pick < vesselWeight) {
      let rest = pick;
      const vessel = vessels.find((item) => (rest -= item.weight) < 0) ?? vessels[0];
      const along = random() * (vessel.points.length - 1);
      const index = Math.min(Math.floor(along), vessel.points.length - 2);
      const f = along - index;
      const a = vessel.points[index];
      const b = vessel.points[index + 1];
      const x = a[0] + (b[0] - a[0]) * f + ux * vessel.radius;
      const y = a[1] + (b[1] - a[1]) * f + uy * vessel.radius;
      const z = a[2] + (b[2] - a[2]) * f + uz * vessel.radius;
      if (!vessel.bright && isInsideChamber(x, y, z, -1, 0.97)) continue;
      return { position: [x, y, z], shade: random(), bright: Boolean(vessel.bright) };
    }

    const index = Math.floor(random() * chambers.length);
    const chamber = chambers[index];
    const jitter = 1 + (random() - 0.5) * 0.025;
    const lx = ux * chamber.r[0] * jitter;
    const ly = uy * chamber.r[1] * jitter;
    const lz = uz * chamber.r[2] * jitter;
    const cos = Math.cos(chamber.a);
    const sin = Math.sin(chamber.a);
    const x = chamber.c[0] + lx * cos - ly * sin;
    const y = chamber.c[1] + lx * sin + ly * cos;
    const z = chamber.c[2] + lz;
    if (isInsideChamber(x, y, z, index, 1)) continue;
    // 心筋の走行に見える斜めの縞を濃淡でつける
    const fibers = 0.5 + 0.5 * Math.sin((x * 1.4 + y * 2.2 + z) * 16);
    return { position: [x, y, z], shade: fibers * 0.7 + random() * 0.3, bright: false };
  }
}

// 主成分の方向に細長く伸びた3つのクラスタ
const clusters = [
  { center: [-1.35, -0.45, 0.2], color: [1, 0.3, 0.16] },
  { center: [0.1, 0.25, -0.2], color: [0.95, 0.91, 0.82] },
  { center: [1.3, -0.15, 0.25], color: [0.2, 0.78, 0.74] },
];

function gaussian(random: () => number) {
  return Math.sqrt(-2 * Math.log(random() || 1e-6)) * Math.cos(2 * Math.PI * random());
}

const vertexShader = `
  attribute vec3 aCluster;
  attribute vec3 aTerrain;
  attribute vec3 aHeartColor;
  attribute vec3 aClusterColor;
  attribute float aSeed;
  uniform float uProgress;
  uniform float uTime;
  uniform float uBeat;
  uniform float uSize;
  varying vec3 vColor;

  float ease(float value) {
    float t = clamp(value, 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
  }

  void main() {
    float delay = aSeed * 0.3;
    float t0 = ease((uProgress - delay) / 0.7);
    float t1 = ease((uProgress - 1.0 - delay) / 0.7);
    float t2 = ease((uProgress - 3.0 - delay) / 0.7);

    vec3 pos = mix(position, aCluster, t0);
    pos = mix(pos, aTerrain, t1);
    pos = mix(pos, position, t2);

    float heart = (1.0 - t0) + t2;
    pos *= 1.0 + heart * uBeat * 0.045;

    float terrain = t1 * (1.0 - t2);
    pos.y += terrain * (
      sin(pos.x * 1.5 + uTime * 0.35) * 0.16 +
      sin(pos.z * 1.9 - uTime * 0.27) * 0.13
    );

    // 形が変わる途中だけ粒を散らす
    float moving = sin(t0 * 3.14159) + sin(t1 * 3.14159) + sin(t2 * 3.14159);
    pos += moving * 0.3 * vec3(
      sin(aSeed * 91.0 + uTime * 0.6),
      cos(aSeed * 47.0 + uTime * 0.5),
      sin(aSeed * 23.0 - uTime * 0.4)
    );

    vec3 color = mix(aHeartColor, aClusterColor, t0);
    color = mix(color, vec3(0.42, 0.45, 0.47), t1);
    color = mix(color, aHeartColor, t2);
    vColor = color;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * (0.65 + aSeed * 0.7) / -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform float uAlpha;
  varying vec3 vColor;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d) * uAlpha);
  }
`;

// 値は順に プロフィール / 成果物 / 成果物の詳細 / 経歴 / 連絡先 の場面
// 形は 成果物 でクラスタ、詳細 で地形、連絡先 で心臓に変わる
const wideScenes = { x: [1.2, 0.35, 0, 0, 1.2], y: [-0.2, 0.95, -1.1, -1.1, -0.1], scale: [0.92, 0.55, 1, 1, 0.8], alpha: [0.6, 0.3, 0.3, 0.3, 0.55] };
const narrowScenes = { x: [0, 0, 0, 0, 0], y: [0.5, 1.05, -1.2, -1.2, 0.6], scale: [0.66, 0.4, 0.7, 0.7, 0.58], alpha: [0.6, 0.32, 0.22, 0.22, 0.5] };

function interpolate(values: number[], progress: number) {
  const index = Math.min(Math.floor(progress), values.length - 2);
  const f = progress - index;
  return values[index] + (values[index + 1] - values[index]) * f;
}

export function HeartScene({ sectionIds }: { sectionIds: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;
    let cleanup = () => {};

    import('three')
      .then((THREE) => {
        if (disposed) return;

        const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        const count = innerWidth < 768 ? 26000 : 70000;
        const random = createRandom(23);

        const heart = new Float32Array(count * 3);
        const cluster = new Float32Array(count * 3);
        const terrain = new Float32Array(count * 3);
        const heartColor = new Float32Array(count * 3);
        const clusterColor = new Float32Array(count * 3);
        const seed = new Float32Array(count);
        const columns = Math.ceil(Math.sqrt(count));

        for (let i = 0; i < count; i++) {
          const j = i * 3;
          const sample = sampleHeart(random);
          heart.set(sample.position, j);
          if (sample.bright) {
            heartColor.set([1, 0.86, 0.72], j);
          } else {
            heartColor.set([0.62 + sample.shade * 0.38, 0.1 + sample.shade * 0.2, 0.08 + sample.shade * 0.08], j);
          }

          const group = clusters[Math.floor(random() * clusters.length)];
          const along = gaussian(random) * 0.5;
          const across = gaussian(random) * 0.16;
          const depth = gaussian(random) * 0.14;
          cluster.set([
            group.center[0] + along * 0.92 - across * 0.38,
            group.center[1] + along * 0.38 + across * 0.92,
            group.center[2] + depth,
          ], j);
          clusterColor.set(group.color, j);

          terrain.set([
            ((i % columns) / columns - 0.5) * 9,
            0,
            (Math.floor(i / columns) / columns - 0.5) * 7,
          ], j);
          seed[i] = random();
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(heart, 3));
        geometry.setAttribute('aCluster', new THREE.BufferAttribute(cluster, 3));
        geometry.setAttribute('aTerrain', new THREE.BufferAttribute(terrain, 3));
        geometry.setAttribute('aHeartColor', new THREE.BufferAttribute(heartColor, 3));
        geometry.setAttribute('aClusterColor', new THREE.BufferAttribute(clusterColor, 3));
        geometry.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

        const uniforms = {
          uProgress: { value: 0 },
          uTime: { value: 0 },
          uBeat: { value: 0 },
          uSize: { value: 1 },
          uAlpha: { value: 0.6 },
        };
        const material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          uniforms,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });
        const points = new THREE.Points(geometry, material);
        points.frustumCulled = false;

        const scene = new THREE.Scene();
        const group = new THREE.Group();
        group.add(points);
        scene.add(group);
        const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
        camera.position.z = 5;

        let renderer: InstanceType<typeof THREE.WebGLRenderer>;
        try {
          renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
        } catch {
          // WebGL が使えない環境では背景なしで読めるようにする
          geometry.dispose();
          material.dispose();
          return;
        }
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        let scenes = wideScenes;
        const resize = () => {
          const width = innerWidth;
          const height = innerHeight;
          const ratio = Math.min(devicePixelRatio, 2);
          renderer.setPixelRatio(ratio);
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
          scenes = width < 768 ? narrowScenes : wideScenes;
          uniforms.uSize.value = (width < 768 ? 13 : 11) * ratio;
        };
        resize();

        const pointer = { x: 0, y: 0 };
        const onPointerMove = (event: PointerEvent) => {
          pointer.x = event.clientX / innerWidth - 0.5;
          pointer.y = event.clientY / innerHeight - 0.5;
        };

        const readProgress = () => {
          const height = innerHeight;
          return sectionIds.slice(1).reduce((sum, id) => {
            const element = document.getElementById(id);
            if (!element) return sum;
            const top = element.getBoundingClientRect().top;
            return sum + Math.min(Math.max((height * 0.85 - top) / (height * 0.6), 0), 1);
          }, 0);
        };

        let progress = readProgress();
        let frame = 0;
        const start = performance.now();
        let last = start;
        let spin = 0;

        const render = (now: number) => {
          const time = reduceMotion ? 0 : (now - start) / 1000;
          const delta = reduceMotion ? 0 : (now - last) / 1000;
          last = now;
          const target = readProgress();
          progress = reduceMotion ? target : progress + (target - progress) * 0.07;

          // 心拍は「ドッ・クン」の2回を1周期にする
          const cycle = (time / 1.05) % 1;
          const beat =
            Math.exp(-Math.pow((cycle - 0.08) / 0.05, 2)) +
            0.65 * Math.exp(-Math.pow((cycle - 0.27) / 0.06, 2));

          uniforms.uProgress.value = progress;
          uniforms.uTime.value = time;
          uniforms.uBeat.value = reduceMotion ? 0 : beat;
          uniforms.uAlpha.value = interpolate(scenes.alpha, progress);

          group.position.x = interpolate(scenes.x, progress);
          group.position.y = interpolate(scenes.y, progress);
          group.scale.setScalar(interpolate(scenes.scale, progress));
          // クラスタの場面では正面に戻し、3つが重ならないように小さく揺らす
          const facing = Math.max(0, 1 - Math.abs(progress - 1) * 1.5);
          spin += delta * 0.12 * (1 - facing);
          const front = Math.round(spin / (Math.PI * 2)) * Math.PI * 2 + Math.sin(time * 0.3) * 0.3;
          group.rotation.y = spin + (front - spin) * facing + pointer.x * 0.35;
          group.rotation.x = pointer.y * 0.2 + Math.min(Math.min(Math.max(progress - 1, 0), 1), Math.min(Math.max(4 - progress, 0), 1)) * 0.45;

          renderer.render(scene, camera);
          container.style.opacity = '1';
          frame = requestAnimationFrame(render);
        };
        frame = requestAnimationFrame(render);

        addEventListener('resize', resize);
        addEventListener('pointermove', onPointerMove);

        cleanup = () => {
          cancelAnimationFrame(frame);
          removeEventListener('resize', resize);
          removeEventListener('pointermove', onPointerMove);
          geometry.dispose();
          material.dispose();
          renderer.dispose();
          renderer.domElement.remove();
        };
      })
      .catch(() => {});

    return () => {
      disposed = true;
      cleanup();
    };
  }, [sectionIds]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-0 transition-opacity duration-1000"
    />
  );
}
