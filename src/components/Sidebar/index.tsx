import Link from "next/link";
import Logo from "../Logo";
import { navLinks } from "../Navbar/navLinks";
import navBarStyles from "../Navbar/Navbar.module.scss";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <Logo />
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href="#">{link.text}</Link>
          </li>
        ))}

        <li>
          <Link href="#">Login</Link>
        </li>
        <li className={navBarStyles.SignUpBtn}>
          <Link href="#">Sign up</Link>
        </li>
      </ul>
    </div>
  );
}
