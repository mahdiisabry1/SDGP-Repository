import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
        <div className="relative w-[240px] h-[240px] lg:w-[1000px] lg:h-[424px] mb-8 lg:mb-0">
          <Image
            src="/landingtemp.png"
            fill
            alt="landing"
          />
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <h1 className="text-2xl font-bold">
            Welcome to MindForge! Learn, Practice, and Empower your Learning
            with Mindforge
          </h1>
        </div>
      </div>
    </div>
  );
}
