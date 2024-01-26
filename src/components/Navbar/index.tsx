import Logo from "@/components/Logo";
import { navLinks } from "./navLinks";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [lang, setLang] = useState("EN");

  return (
    <nav className={styles.Navbar}>
      <Logo />
      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <Link href="#">{link.text}</Link>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link href="#">Login</Link>
        </li>
        <li className={styles.SignUpBtn}>
          <Link href="#">Sign up</Link>
        </li>
        <li className={styles.SwitchLang}>
          <span onClick={() => setLang(lang === "EN" ? "AR" : "EN")}>
            {lang}
          </span>
          <IoIosArrowDown />
        </li>
      </ul>
    </nav>
  );
}
