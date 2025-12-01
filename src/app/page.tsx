import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex items-center gap-3">
      <Link
        href="/assignment-1"
        className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-black cursor-pointer text-white"
      >
        Assignment 1
      </Link>

      <Link
        href="/assignment-1"
        className="flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-black cursor-pointer text-white"
      >
        Assignment 2
      </Link>
    </div>
  );
}
