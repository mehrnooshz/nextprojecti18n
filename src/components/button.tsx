import { useTranslations } from "next-intl";
import Link from "next/link";

type NavItemProps = {
  title: string;
  type: "submit" | "reset" | "button" | undefined;
};

export default function Button({ title, type }: NavItemProps) {
  const t = useTranslations("Navigation");

  return (
    <>
      <button type={type}>{t(title)}</button>
    </>
  );
}
