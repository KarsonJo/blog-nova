import Image from "next/image";
import bg from "../assets/bg.png";
import overlay from "../assets/overlay.png";

export default async function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center">
      <HeroBackground />
      <div className="relative flex w-full max-w-7xl flex-col gap-8 px-4 text-white drop-shadow-md sm:px-8">
        <div className="text-6xl font-medium sm:text-7xl lg:text-8xl">
          I'm KarsonJo
        </div>
        <div className="text-3xl sm:text-4xl lg:text-5xl">
          Freelance Full Stack Developer
        </div>
      </div>
    </section>
  );
}

function HeroBackground() {
  return (
    <div className="select-none pointer-events-none">
      <Image src={bg} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-75"></div>
      <Image src={overlay} alt="" fill className="object-cover" />
    </div>
  );
}
