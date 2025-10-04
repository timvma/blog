import Link from "next/link";

export function Footer() {
  return (
    <footer className="">
      <section className="bg-blue-900 py-2">
        <div className=" w-[92vw] mx-auto">
          <nav>
            <Link href="/articles">Articles</Link>
          </nav>
        </div>
      </section>

      <section className="bg-blue-900">
        <div className="w-[92vw] mx-auto"></div>
      </section>
    </footer>
  );
}
