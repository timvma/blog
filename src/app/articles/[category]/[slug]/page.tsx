import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { slug: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const client = createClient();
  const page = await client.getByUID("article", slug).catch(() => notFound());
  const domainName = process.env.DOMAIN_NAME;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: page.data.meta_title,
    description: page.data.meta_description,
    image: asImageSrc(page.data.meta_image),
    datePublished: page.first_publication_date,
    dateModified: page.last_publication_date,
    author: {
      "@type": "Person",
      name: page.data.author || "Your Name",
    },
    publisher: {
      "@type": "Organization",
      name: "Your Site Name",
      logo: {
        "@type": "ImageObject",
        url: `/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${domainName}/articles/${page.uid}`,
    },
  };

  return (
    <>
      <SliceZone slices={page.data.slices} components={components} />;
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const client = createClient();
  const page = await client.getByUID("article", slug).catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [{ url: asImageSrc(page.data.meta_image) ?? "" }],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("article");

  return pages.map((page) => ({ uid: page.uid }));
}
