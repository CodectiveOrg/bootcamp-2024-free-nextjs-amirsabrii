/** @format */

import { ReactElement } from "react";

import Link from "next/link";
import Image from "next/image";

import abuteMeLogo from "@/assets/logo/about-me.svg";
import abuteUsLogo from "@/assets/logo/about-us.svg";
import abuteLogo from "@/assets/logo/about.svg";

import MingcuteYoutubeFill from "@/icons/MingcuteYoutubeFill";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";
import MingcuteTwitterFill from "@/icons/MingcuteTwitterFill";

import styles from "./footer.module.css";

function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
    <div className={styles.writings}>
      <div className={styles.logo}>دکتر من</div>
      <p className={styles.description}>
        تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
        ایران
      </p>
    </div>
    <div className={styles.visuals}>
      <ul className={styles.certificates}>
        <li>
          <Link href="#">
            <Image src={abuteMeLogo} alt="IDK Logo" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={abuteUsLogo} alt="Certificate Logo" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image src={abuteLogo} alt="Enamad Logo" />
          </Link>
        </li>
      </ul>
      <ul className={styles.socials}>
        <li>
          <Link href="https://t.me/Codective" target="_blank">
            <MingcuteTelegramFill />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/bijanprogrammer/"
            target="_blank"
          >
            < MingcuteYoutubeFill/>
          </Link>
        </li>
        <li>
          <Link
            href="https://www.youtube.com/@BijanProgrammer"
            target="_blank"
          >
            <MingcuteTwitterFill />
          </Link>
        </li>
      </ul>
    </div>
    <p className={styles.copy}>
      تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
      من می‌باشد!
    </p>
  </footer>
  );
}

export default FooterComponent;
