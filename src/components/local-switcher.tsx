"use client";

import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
const locales = ["en", "de"] as const;
const { useRouter, usePathname } = createSharedPathnamesNavigation({ locales });
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const path = usePathname();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(path, { locale: nextLocale });
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">change language</p>
      <select
        defaultValue={localActive}
        className="bg-transparent py-2"
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </label>
  );
}
