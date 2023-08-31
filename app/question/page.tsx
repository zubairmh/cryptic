"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Orbitron } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cookies } from "next/headers";
// import { useEffect } from "react"
import axios from "axios";
import { error } from "console";
import { useRouter } from "next/navigation";
const orbit = Orbitron({ weight: "600", subsets: ["latin"] });

export default function Question() {
  const answer = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [ans, setans] = useEffect({});
  useEffect(() => {
    let data = localStorage.getItem("data");
    if (typeof data == undefined) {
      router.push("/");
    }
    axios.get(`http://localhost:8100/ques/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          Accept: "application/json",
        },
      }).then((res)=>{
        setans(res.data)
      }).catch((error)=>{console.log(error)})
    })
  function ValidateAnswer() {
    if (answer.current && answer.current.value != "") {
      console.log(answer.current.value);
    }
  }
  return (
    <div
      style={orbit.style}
      className="bg-black text-white flex-col flex min-h-screen items-center justify-center gap-6"
    >
      <h1 className="text-3xl">Question 1</h1>
      <img
        className="h-[60vh]"
        alt="ques"
        src="https://i.imgur.com/0hvaNo3.jpeg"
      />
      <Input ref={answer} className="md:w-1/4 w-1/2" placeholder="answer" />
      <Button>Submit</Button>
    </div>
  );
}
