import Image from "next/image";
import { Orbitron } from "next/font/google";
import Login from "@/components/ui/login";
import LoginSwitch from "@/components/handlers/switch";
import { BsDiscord } from "react-icons/bs";
import {MdLeaderboard} from "react-icons/md"
import Link from "next/link";
const orbit = Orbitron({ weight: "600", subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-center bg-black text-white ${orbit.className}`}
    >
      <Image width={850} height={478} alt="cicada" src="/cicada.jpg" />
      <h1 className="text-5xl">CRYPTIC HUNT</h1>
      <LoginSwitch />
      <Login />
      <div className="absolute bottom-0 right-0">
        <div className="flex flex-row gap-4">
          <Link href="/leaderboard" target="_blank">
            <MdLeaderboard size={40} />
          </Link>
          <Link href="http://bit.ly/mlsc-discord" target="_blank">
            <BsDiscord size={40} />
          </Link>
        </div>
      </div>
    </div>
    // </CookiesProvider>
  );
}
