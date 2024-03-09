import { useTranslations } from "next-intl";
import Link from "next/link";

type NavItemProps = {
  href: string;
  title: string;
};

export default function NavItem({ title, href }: NavItemProps) {
  const t = useTranslations("Navigation");

  return (
    <>
      <Link href={href}>{t(title)}</Link>
    </>
  );
}
