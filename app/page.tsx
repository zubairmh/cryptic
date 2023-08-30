import Image from "next/image"
import { Orbitron } from "next/font/google"
import Login from "@/components/ui/login"
const orbit=Orbitron({weight:"600", subsets:["latin"]})
export default function Home() { 
  return <div className={`flex flex-col min-h-screen items-center justify-center bg-black text-white ${orbit.className}`}>
    <Image width={850} height={478} alt="cicada" src="/cicada.jpg"/>
    <h1 className="text-5xl">
      CRYPTIC HUNT
    </h1>
    <Login/>
  </div>
}