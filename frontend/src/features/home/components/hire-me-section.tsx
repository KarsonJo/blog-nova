import { NegativePrimaryButtonSpan } from "@/components/buttons/negative-primary-button";
import { Link } from "@/i18n-nav";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";
import HomeSectionLayout from "./section-layout";

export default function HireMeSection() {
  return (
    <HomeSectionLayout className="bg-primary text-primary-fg">
      {/* <div className="flex max-w-7xl flex-col items-center text-center">
        <header className="mb-4 flex items-center gap-8 px-12">
          <PiPaperPlaneTiltDuotone className="h-16 w-16 shrink-0" />
          <h1 className="w-fit text-4xl font-bold">
            HIRE ME FOR YOUR AWESOME PROJECT
          </h1>
          <Link href="#" scroll={false} className="shrink-0">
            <NegativePrimaryButtonSpan className="px-16 py-3">
              Hire me
            </NegativePrimaryButtonSpan>
          </Link>
        </header>
        <p className="mx-auto max-w-3xl">
          I am available for Freelance projects that depends on your project
          value. Hire me and get your project done!
        </p>
      </div> */}
      <div className="py-4 mx-auto flex flex-col items-center justify-between gap-x-12 gap-y-4 lg:flex-row lg:items-start">
        <PiPaperPlaneTiltDuotone className="mr-6 h-16 w-16 shrink-0" />
        <header className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            {/* <PiPaperPlaneTiltDuotone className="mr-6 inline h-16 w-16 shrink-0" /> */}
            <span className="align-middle">
              HIRE ME FOR YOUR AWESOME PROJECT
            </span>
          </h1>
          <p className="mx-auto w-4/5">
            I am available for Freelance projects that depends on your project
            value. Hire me and get your project done!
          </p>
        </header>
        <Link href="#" scroll={false} className="shrink-0">
          <NegativePrimaryButtonSpan className="my-2 px-16 py-3">
            Hire me
          </NegativePrimaryButtonSpan>
        </Link>
      </div>
    </HomeSectionLayout>
  );
}
