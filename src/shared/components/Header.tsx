import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 bg-blue-950">
      <div className="flex justify-between w-[92vw] max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <button>menu</button>
          <Link href="/">
            <img src="https://placehold.jp/80x40.png" alt="logo" />
          </Link>
          {/* <nav className="flex gap-2">
            <a href="/articles">Articles</a>
            <a href="/authors">Authors</a>
            <a href="/category">Category</a>
            <a href="">Category3</a>
            <a href="/about">About</a>
          </nav> */}
        </div>
        <button>icon</button>
      </div>
    </header>
  );
}
