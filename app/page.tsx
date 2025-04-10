import About from "./sections/About";
import Process from "./sections/Process";
import Hero from "./sections/Hero";
import { Reviews } from "./sections/Reviews";


export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col mx-auto">
      <div className="w-full h-full">
        <Hero />
        <Reviews />
        <About/>
        <Process />
      </div>
    </main>
  );
}
