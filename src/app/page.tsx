import { HeroSlider } from "@/components/home/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full bg-yellow-100 min-h-screen flex-col items-center">
      <HeroSlider />
    </main>
  );
}
