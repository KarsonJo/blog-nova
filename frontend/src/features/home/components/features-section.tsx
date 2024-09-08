import clsx from "clsx";
import HomeSectionLayout from "./section-layout";

interface IFeature {
  title: string;
  description: string;
}

const features: IFeature[] = [
  {
    title: "WEB DESIGN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates fugit, dolor quo, repellendus, aut ea nisi molestias necessitatibus magnam at quibusdam amet dolorem eius est deleniti! Voluptas omnis fugiat sapiente dicta sint eveniet, nam ex.",
  },
  {
    title: "UX/UI DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim. Curabitur varius est quis din pat.",
  },
  {
    title: "APP DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. pat.",
  },
];

export default async function FeaturesSection() {
  return (
    <HomeSectionLayout>
      <div className="mx-auto flex max-w-3xl flex-col justify-center xl:max-w-none xl:flex-row xl:items-center">
        <FeatureItem serialNumber="02." feature={features[1]} />
        <FeatureItem serialNumber="01." feature={features[0]} primary />
        <FeatureItem serialNumber="03." feature={features[2]} />
      </div>
    </HomeSectionLayout>
  );
}

interface IFeatureItemProps {
  serialNumber?: React.ReactNode;
  feature: IFeature;
  primary?: boolean;
}

function FeatureItem(props: IFeatureItemProps) {
  return (
    <section
      className={clsx(
        "flex min-h-60",
        props.primary &&
          "bg-primary text-primary-fg sm:-m-4 sm:min-h-64 xl:min-h-[26rem] xl:w-[26rem]",
        !props.primary && "bg-zinc-700 sm:m-4 xl:min-h-96 xl:w-96",
      )}
    >
      <article className="flex flex-col p-8">
        <h1 className="text-3xl font-semibold">{props.serialNumber}</h1>
        <div className="flex grow flex-col justify-center">
          <h2
            className={clsx(
              "my-4 text-2xl font-bold",
              !props.primary && "text-primary",
            )}
          >
            {props.feature.title}
          </h2>
          <p>{props.feature.description}</p>
        </div>
      </article>
    </section>
  );
}
