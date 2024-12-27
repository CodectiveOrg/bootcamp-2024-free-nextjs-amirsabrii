/** @format */
"use client";

import { ReactElement } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import style from "./header.module.css";

function HeaderComponent(): ReactElement {
  const pathName = usePathname();

  const navbarItem = [
    { href: "", title: "خانه" },
    { href: "search", title: "جستجو" },
    { href: "About", title: "درباره ما" },
    { href: "Contact", title: "تماس با ما" },
  ];

  return (
    <header className={style.header}>
      <nav>
        <ul>
          {navbarItem.map((n, i) => {
            return (
              <li key={i}>
                <Link
                  href={`/${n.href}`}
                  className={pathName === `/${n.href}` ? style.active : ""}>
                  {n.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className={style.cta}>ورود | ثبت نام</button>
    </header>
  );
}

export default HeaderComponent;
