/** @format */

import styles from "./page.module.css";
import GlobalSearchBoxComponent from "@/components/global-searech-box/global.search.box";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1>دکتر من</h1>
        <GlobalSearchBoxComponent />
        <div className={styles.history}>
          <div className={styles.title}>آخرین جستجوهای شما</div>
          <ul>
            <li>ارتوپد</li>
            <li>قلب و عروق</li>
          </ul>
        </div>
      </div>
    </>
  );
}
