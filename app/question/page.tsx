"use client"
import Image from "next/image"
import { useRef } from "react"
import { Orbitron } from "next/font/google"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
const orbit=Orbitron({weight:"600", subsets:["latin"]})
export default function Question() {
    const answer=useRef<HTMLInputElement>();
    function ValidateAnswer() {
        if(answer.current && answer.current.value!="") {
            console.log(answer.current.value)
        }
    }
    return (
    <div style={orbit.style} className="bg-black text-white flex-col flex min-h-screen items-center justify-center gap-6">
        <img className="h-[60vh]" alt="ques" src="https://i.imgur.com/ZLrlxJx.png"/>
        <Input ref={answer} className="md:w-1/4 w-1/2" placeholder="answer" />
        <Button onClick={ValidateAnswer}>Submit</Button>
    </div>
    )
}