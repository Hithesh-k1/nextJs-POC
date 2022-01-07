import Link from "next/link";
import classes from "./mainHeader.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <>
            <img className={classes.logo__image} src="/event_logo.png" alt="logo" height="30" width="30"/> <span> Next Event</span>
          </>
        </Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
