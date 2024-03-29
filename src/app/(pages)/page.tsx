import localFont from "next/font/local";

const Bogart = localFont({
  src: "../../../public/assets/fonts/bogart/Bogart-SemiBold-trial.ttf",
});

export default function Home() {
  const TextArray = ["NextJS", "ShadcnUI", "Tailwind", "Typescript"];
  return (
    <main className="h-[65vh] w-full justify-center items-center flex px-4 flex-col">
      <div className={Bogart.className}>
        <div className="scroll-m-20 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-normal lg:text-5xl text-center space-y-3 justify-center">
          Modern web development {<br />}
        </div>
        <div className="pt-2 md:pt-6"></div>
      </div>
    </main>
  );
}
