import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>This connection does not exist.</h1>
        <p>The page may have moved or the link may be incorrect.</p>
        <Link className="button primary" href="/">Return home</Link>
      </div>
    </section>
  );
}
