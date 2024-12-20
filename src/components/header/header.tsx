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
              <li>
                <Link href={`/${n.href}`}  key={i} className={pathName === `/${n.href}` ? style.active : ""}> 
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

{
  /* <li>
            <Link href='/' className={pathName === '/' ? style.active : ''}>خانه</Link>
          </li>
          <li>
            <Link href='/search' className={pathName === '/search' ? style.active : ''}>جستجو</Link>
          </li>
          <li>
            <Link href='/About' className={pathName === '/About' ? style.active : ''}>درباره ما</Link>
          </li>
          <li>
            <Link href='/Contact' className={pathName === '/Contact' ? style.active : ''}>تماس با ما</Link>
          </li> */
}

export default HeaderComponent;
