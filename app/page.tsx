import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="hero bg-[#f5f5f5] w-full flex justify-center items-center">
        <Image src="/icon.png" alt="logo" width={500} height={500} />
      </section>
      <section className="about-section py-20 px-6 flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-5xl">Rebisa Games</h1>
        <p className="text-xl font-normal max-w-[700px] text-center">
          Rebisa Games is an exciting and educational mobile game platform that
          combines elements of trivia quizzes with battle mechanics. Players can
          earn game currency by answering questions correctly and use it to
          enter battles in the arena or purchase various items from the in-game
          store. Join Rebisa Games now to discover the thrill of battling with
          knowledge!
        </p>
      </section>
      <section className="game-section bg-[#f5f5f5] py-20 px-6">
        <div className="container flex items-center flex-col gap-10 md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col gap-4 md:text-left md:items-start items-center text-center">
            <h1 className="font-bold text-5xl">Rebisa</h1>
            <p className="text-xl font-normal ">
              Rebisa is a fun and educational mobile game platform that combines
              quiz and war game elements.
            </p>
            <div className="flex gap-4">
              <Image
                src="/play_store_badge_en.webp"
                alt="logo"
                width={180}
                height={180}
              />
              <Image
                src="/appstore-badge.svg"
                alt="logo"
                width={185}
                height={185}
              />
            </div>
          </div>
          <div className="flex md:justify-end w-full justify-center">
            <Image src="/app.png" alt="logo" width={360} height={640} />
          </div>
        </div>
      </section>
    </main>
  );
}
