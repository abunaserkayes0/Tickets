import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-5xl">Not Found</h2>
      <p>SORRY!!!😒 PAGE IS NOT AVAILABLE</p>
      <Link href="/">DASHBOARD</Link>
    </main>
  );
}
