import { NegativePrimaryButtonSpan } from "@/components/buttons/negative-primary-button";
import { Link } from "@/i18n-nav";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import portBg from "../assets/port-bg.jpg";
import SectionHeading from "./section-heading";
import HomeSectionLayout from "./section-layout";

export default function WorksSection() {
  return (
    <section>
      <SectionHeading className="py-12 text-center text-4xl font-extrabold">
        SOME OF MY WORKS
      </SectionHeading>
      <HomeSectionLayout className="relative">
        <aside>
          <Image src={portBg} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90" />
        </aside>
        <section className="relative py-8">
          <div className="mx-auto w-fit">
            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <Link key={index} href="#">
                  <WorksItem
                    src={portBg}
                    title={`Project ${index + 1}`}
                    subtitle="Lorem, ipsum dolor."
                  />
                </Link>
              ))}
            </section>
          </div>
          <footer className="flex justify-center pt-16">
            <Link href="#" scroll={false} className="">
              <NegativePrimaryButtonSpan className="px-6 py-4">See more</NegativePrimaryButtonSpan>
            </Link>
          </footer>
        </section>
      </HomeSectionLayout>
    </section>
  );
}

interface IWorksItemProps {
  src: string | StaticImport;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export function WorksItem(props: IWorksItemProps) {
  return (
    <article className="group/works-item relative h-[75vw] max-h-96 w-[75vw] max-w-96 overflow-hidden bg-zinc-900 transition-shadow duration-300 hover:shadow-2xl md:h-80 md:w-80">
      <Image
        src={props.src}
        alt=""
        fill
        className="pointer-events-none select-none object-cover transition-transform duration-300 group-hover/works-item:scale-110"
      />
      <section className="absolute inset-0 border-[12px] border-slate-300 opacity-0 transition-opacity duration-300 group-hover/works-item:opacity-100">
        <div className="absolute inset-0 scale-0 bg-gradient-to-t from-white from-20% to-white/90 shadow-inner transition-transform duration-300 ease-out group-hover/works-item:scale-100">
          <header className="absolute bottom-0 left-0 p-4">
            <h1 className="text-xl font-semibold text-zinc-900">
              {props.title}
            </h1>
            <h2 className="font-semibold text-primary">{props.subtitle}</h2>
          </header>
        </div>
      </section>
    </article>
  );
}
