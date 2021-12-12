import classes from "./Layout.module.css";

export default function Layout() {
  return (
    <header className={`${classes.layout}`}>
      <nav>
        <ul className={`${classes.listcontent}`}>
          <li>Home</li>
          <li>Battle</li>
          <li>Popular</li>
        </ul>
      </nav>
    </header>
  );
}