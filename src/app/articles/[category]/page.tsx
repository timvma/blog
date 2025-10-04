import { Metadata } from "next";
import { notFound } from "next/navigation";
import { asImageSrc } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      Category
      <Link href={"/articles/life/test"}>Life / Test</Link>
    </>
  );
}
