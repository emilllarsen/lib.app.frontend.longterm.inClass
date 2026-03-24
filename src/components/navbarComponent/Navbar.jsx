import styles from "./navbar.module.css";
import { NavLink } from "react-router";



export default function Navbar() {
  const itemCss = styles["nav-element"];
  function styleIt({isActive}){
    return (isActive)?itemCss + " " + styles.active : itemCss;
  }
  return (
    <nav className={styles.nav}>
      <NavLink className={styleIt} to="/">Home</NavLink>
      <NavLink className={styleIt} to="/users">Users</NavLink>
      <NavLink className={styleIt} to="/books">Books</NavLink>
    </nav>
  );
}
