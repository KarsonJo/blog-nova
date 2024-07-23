import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {t("title")}
      <div className="px-4 py-2 bg-primary text-primary-fg">Lorem, ipsum.</div>
      <div className="px-4 py-2 bg-secondary text-secondary-fg">Lorem, ipsum.</div>
    </main>
  );
}
