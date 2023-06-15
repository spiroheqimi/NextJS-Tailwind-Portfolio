import Link from "next/link";

export default function About() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <Link href="/">
        <button className="p-10 bg-blue-300 text-white hover:bg-blue-500 duration-500 rounded-md">
          Go To Home Page
        </button>
      </Link>
    </div>
  );
}
