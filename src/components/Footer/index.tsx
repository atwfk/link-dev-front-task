import Link from "next/link";
import Logo from "../Logo";
import { footerData } from "./footerData";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import googlePlay from "@/assets/google-play.svg";
import appStore from "@/assets/app-store.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`section-wrapper ${styles.Footer}`}>
      <div className={styles.FooterContentWrapper}>
        <div className={styles.CompanyInfo}>
          <Logo />
          <p className={styles.CompanyBrief}>
            We make technology produce productive, adaptable and sustainable
            business experiences.
          </p>
        </div>

        <div className={styles.linksWrapper}>
          {footerData.map((linksData) => (
            <div key={linksData.id} className={styles.LinksDataWrapper}>
              <h4 className={styles.linksDataText}>{linksData.text}</h4>
              <ul className={styles.LinksData}>
                {linksData.links.map((linkData) => (
                  <li key={linkData.id}>
                    <Link className={styles.LinkText} href={linkData.path}>
                      {linkData.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.CompanyMediaWrapper}>
          <ul className={styles.CompanyMedia}>
            <li className={styles.MediaItem}>
              <Link
                href="https://www.facebook.com/link.development/"
                target="_black"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li className={styles.MediaItem}>
              <Link
                href="https://www.instagram.com/linkdevelopment/"
                target="_black"
              >
                <CiInstagram />
              </Link>
            </li>
            <li className={styles.MediaItem}>
              <Link href="https://twitter.com/linkdevelopment/" target="_black">
                <FaTwitter />
              </Link>
            </li>
          </ul>

          <span className={styles.AppsText}>Discover our app</span>
          <div className={styles.Apps}>
            <button className={styles.AppBtn}>
              <Image
                src={googlePlay}
                width={100}
                height={35}
                alt="google-play"
              />
            </button>
            <button className={styles.AppBtn}>
              <Image src={appStore} width={100} height={35} alt="app-store" />
            </button>
          </div>
        </div>
      </div>
      <p className={styles.CopyRightsText}>
        All rights reserved@Linkdevelopment.com
      </p>
    </footer>
  );
}
