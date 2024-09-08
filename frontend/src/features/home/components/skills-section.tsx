import SectionHeading from "./section-heading";

export default async function SkillsSection() {
  return (
    <section className="py-16">
      <article className="max-w-none">
        <SectionHeading className="text-4xl font-extrabold mb-12 text-center">
          TECHNICAL SKILLS
        </SectionHeading>
        <section className="bg-zinc-700 px-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-10 py-16">
            <SkillRank value={0.5} />
            <SkillRank value={0.5} />
            <SkillRank value={0.5} />
            <SkillRank value={0.5} />
            <SkillRank value={0.5} />
          </div>
        </section>
      </article>
    </section>
  );
}

interface IProps {
  value: number;
}

function SkillRank(props: IProps) {
  const percentage = `${props.value * 100}%`;
  return (
    <section className="not-prose flex flex-col gap-1.5 text-white">
      <h2 className="text-xl font-semibold">HTML 5</h2>
      <div className="h-1.5 bg-zinc-900">
        <div
          className="relative h-full bg-primary"
          style={{ width: percentage }}
        >
          <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary shadow-sm">
            <div className="absolute bottom-full left-1/2 -translate-x-1/2">
              {percentage}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
