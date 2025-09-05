'use client';
import { useState } from "react";

export default function New(){
  return (
    <>
      <div className="mx-8 w-full h-full">
        <h1 className="text-2xl mt-4 ">HTML CSS JS</h1>
        <ul className="w-full">
          <li><a href="https://to-be-sun.github.io/FM6-3-Mortgage-repayment-calculator/" >Mortgage repayment calculator</a></li>
          <iframe src="https://to-be-sun.github.io/FM6-3-Mortgage-repayment-calculator/" className="w-full h-180 mt-2"></iframe> 
        </ul>
        <h1 className="text-2xl mt-4">API連携</h1>
        <ul>
          <li><a href="https://to-be-sun.github.io/my-favorite-restaurant/">お気に入りの飲食店</a></li>
          <iframe src="https://to-be-sun.github.io/my-favorite-restaurant/" className="w-full h-180 mt-2"></iframe>
        </ul>
      </div>
      
      
    </>
  );
}