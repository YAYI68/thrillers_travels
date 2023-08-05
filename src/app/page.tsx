import { HeroSlider } from "@/components/home/slider";
import { TabContainer } from "@/components/home/tab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full  min-h-screen flex flex-col items-center ">
      <HeroSlider />
      <TabContainer />
    </main>
  );
}
