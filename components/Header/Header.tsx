import css from "./header.module.css"
import Link from "next/link"


export default function Header() {
    return (<header>
            <header className={css.header}>
      <Link href="/">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
        </ul>
      </nav>
    </header>
    </header>
    )
}