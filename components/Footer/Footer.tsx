import css from "./footer.module.css"
import Link from "next/link";


export default function Footer() {
    return (
        <footer>
        <footer className={css.footer}>
  <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Developer: your name</p>
      <p>
        Contact us:
        <Link href="<mailto:student@notehub.app>">student@notehub.app</Link>
      </p>
    </div>
  </div>
</footer>

      </footer>
    )
}