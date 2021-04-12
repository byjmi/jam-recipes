import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Jamaican</span>
              <span>Fine Dining</span>
            </h1>
            <h2>Lord Have Mercy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">{children}</div>

      <footer>
        <p>Copyright 2021 - Jamaican Fine Dining</p>
      </footer>
    </div>
  );
}
