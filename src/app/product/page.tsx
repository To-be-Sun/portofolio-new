'use client';
import { useState } from "react";
import {Button} from "@/components/ui/button"
import Header from "@/components/header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function New(){
  const [count, setCount] = useState(0);
  const increment = ()=>{
    setCount(count+1);
  }
  const decrement = ()=>{
    setCount(count-1);
  }
  const reset = ()=>{
    setCount(0);
  }
  return (
    <>
      <div>
        
        <h1>{count}</h1>
        <Button variant='outline'>foajfjf</Button>
        <button className="rounded-full mx-10 bg-red-500 text-white px-3" onClick={increment}>+</button>
        <button className="bg-green-500 text-white px-3" onClick={decrement}>-</button>
        <button className="bg-purple-500 text-white px-3" onClick={reset}>reset</button>
      </div>
    </>
  );
}