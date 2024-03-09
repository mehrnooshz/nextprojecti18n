import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("AboutPage");
  return <div>{t("description")}</div>;
}
