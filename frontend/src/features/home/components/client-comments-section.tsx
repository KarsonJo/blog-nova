import { PiQuotesFill } from "react-icons/pi";
import SectionHeading from "./section-heading";
import HomeSectionLayout from "./section-layout";

export default function ClientCommentsSection() {
  return (
    <HomeSectionLayout>
      <SectionHeading className="py-12 text-center text-4xl font-extrabold">
        CLIENT TESTIMONIALS
      </SectionHeading>
      <article className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="h-32 w-32 rounded-full bg-red-500"></div>
        <h2 className="my-6 text-2xl font-semibold text-primary">Tunir Maa</h2>
        <div className="flex items-start gap-2 text-lg">
          <PiQuotesFill className="inline h-6 w-6 shrink-0 rotate-180 font-extrabold md:h-8 md:w-8 lg:h-10 lg:w-10" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            praesentium ipsa sunt quia error qui provident in nostrum amet
            autem?
          </p>
          <PiQuotesFill className="inline h-6 w-6 shrink-0 font-extrabold md:h-8 md:w-8 lg:h-10 lg:w-10" />
        </div>
      </article>
    </HomeSectionLayout>
  );
}
