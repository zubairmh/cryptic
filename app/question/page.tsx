"use client"
import Image from "next/image"
import React,{ useEffect, useRef } from "react"
import { Orbitron } from "next/font/google"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
// import { useEffect } from "react"
import axios from "axios"
import { error } from "console"
import { useRouter } from "next/navigation"
const orbit=Orbitron({weight:"600", subsets:["latin"]})

export default function Question(){

    const answer=useRef<HTMLInputElement>();
    const router = useRouter();
    const [ans,setans] = useEffect({})
    useEffect(()=>{

        let data = localStorage.getItem("data")
        if (typeof data == undefined){
            router.push("/")
        }
        axios.post("http://localhost:8100/ques/get",{"token":data.jwt}).then((res)=>{
            setans(res.data)
        }).catch((error)=>{
            console.log(error);
            setTimeout(() => {
                router.push("/");
            }, 2000);
        })

    },[])
    function ValidateAnswer() {
        if(answer.current && answer.current.value!="") {
            console.log(answer.current.value)
        }
    }
    return (
    <div style={orbit.style} className="bg-black text-white flex-col flex min-h-screen items-center justify-center gap-6">
        <h1 className="text-3xl">Question 1</h1>
        {/* <img className="h-[60vh]" alt="quesw" src="https://i.imgur.com/ZLrlxJx.png"/> */}
        <Input ref={answer} className="md:w-1/4 w-1/2" placeholder="answer" />
        <Button onClick={ValidateAnswer}>Submit</Button>
    </div>
    )
}