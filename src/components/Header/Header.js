import Image from "next/image";
import style from "./Header.module.css";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
export default function Header() {
  return (
    <header className={style.header}>
      <Link className={style.box_logo} href="/">
        <div className={style.box_img}>
          <Image
            src={process.env.FAVICON}
            alt="loading"
            width={54}
            height={38}
          />
        </div>
        <h1 className={style.h1}>SriChinmoy Sumy</h1>
      </Link>
      <a href="tel:0991703480" className={style.box_telephone}>
        <BsTelephoneFill />
        <div className={style.telephone}>+380 99 170 34 80</div>
      </a>
    </header>
  );
}
