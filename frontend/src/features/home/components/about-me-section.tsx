import { Link } from "@/i18n-nav";
import Image from "next/image";
import person from "../assets/person.png";
import SectionHeading from "./section-heading";
import HomeSectionLayout from "./section-layout";

export default async function AboutMeSection() {
  return (
    <HomeSectionLayout>
      <div className="relative flex flex-col items-center justify-between gap-12 md:flex-row">
        <aside className="relative mb-8 mr-8 sm:mb-10 sm:mr-10 md:mb-12 md:mr-12">
          <div className="absolute inset-0 border-8 border-primary" />
          <div className="max-w-80 translate-x-8 translate-y-8 border-l-8 border-t-8 border-zinc-900 sm:translate-x-10 sm:translate-y-10 md:translate-x-12 md:translate-y-12">
            <Image
              src={person}
              alt=""
              className="relative select-none border-4 border-white"
            />
          </div>
        </aside>
        <section className="grow">
          <article className="prose mx-auto max-w-xl text-center text-slate-200 md:text-start">
            <header>
              <SectionHeading>ABOUT ME</SectionHeading>
            </header>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aspernatur repellendus reiciendis asperiores!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At vero
              nam aut. Quia aut nemo deleniti, culpa itaque facilis autem
              asperiores repellendus dolorem ab placeat natus consectetur quis
              rerum? Recusandae ut dolorum dolore laudantium repudiandae illo
              soluta autem voluptates modi!
            </p>
            <footer className="not-prose mx-auto mt-12 w-fit md:mx-0">
              <div className="flex gap-4 flex-wrap justify-center">
                <Link href="#">
                  <span className="flex items-center justify-center rounded-sm bg-primary px-10 py-2.5 text-center text-lg font-semibold text-primary-fg transition-colors hover:bg-secondary hover:text-secondary-fg active:hue-rotate-30">
                    HIRE ME
                  </span>
                </Link>
                <Link href="#">
                  <span className="flex items-center justify-center rounded-sm border border-primary px-10 py-2.5 text-center text-lg font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary active:hue-rotate-30">
                    DOWNLOAD CV
                  </span>
                </Link>
              </div>
            </footer>
          </article>
        </section>
      </div>
    </HomeSectionLayout>
  );
}
