import Link from "next/link";

type BreadcrumbLinkType = {
  href: string;
  label: string;
};

export function BreadCrumbs({ links }: { links: BreadcrumbLinkType[] }) {
  return (
    <nav>
      {links.map((link) => (
        <Link href={`${link.href}`}>{link.label}</Link>
      ))}
    </nav>
  );
}
