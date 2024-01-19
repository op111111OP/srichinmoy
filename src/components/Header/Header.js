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
            src={
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAoCAYAAABEklK7AAADc0lEQVR4Ad3ZQ7gjWQCA0fvctm13P4xt27Zt27Zt27Zt27Zn0n3nLGpRX42SN8nXyVucXfQnqboKkw98qYpQqWKM/2qyvv8bOYBl2YkD2J25qG4LkZM5l4/4mWnExPecxeBKjaxiQ74k/ocPWJuqSotcmZ+IefqDPamtlMi+vElM+ZSjWJVNOJzHiCnTWL7cI5fiBI4npjzBZEJGT7bnO2Li+HKNnIlL+JqY8QuzEVJqaU9ILMqHRB5nQDlGLsdvRLL2zt6Q2JebOIsmApsRE2uWY2Q1pxOzOJG6TOSbxMQJBLryGJGFyy8S+nMM3xMz9iGkXEpM7EZINPIpW5dnJNTQzNXElK9pJCS6swkr0iXzuouzGlVlGgnUsTe/EhP7EzJm4UT6EFqhF43MzAQG0bnkkRmb8jORqwkp7bmbm+lEKEBntuUBfiDHd7zGdWzNkJJGZmxL5E5CYigXE9mOUIA+XEP8D0+zJz0peWQV53A8gbl4gZjYi5CnRh4kFuBxFittJNRSzzCeI6ZsRcjTJcSML7mfh/iIHDHjF/YobSRUczTZu+5shDwM5z1iyuVMzFwGm/MYMSPH9jSUMrKZL4gpF9KBkIdV+ZmY+JwJBLK6sCUvEFP+YNFSRu5CTHmMfoQ87c40YuJa6gn/YgTHZp53P8NKEdmJ24mJH5mZUIBDiIkc6xRwP9iFHDFxLHXFjhzIR8TE3QW+Vj2XEPmVC6gmFGB/phI5lfpiRzbxOzGxH6EAY3mbl1mdHq0cyvYgxyv0L3bkHMSU7VsxBC3BOEJrJSG78jLjih05GzFlB0Ke+rMJJ3Ezd7MToUDpmHVoKXbkKL4lJg4m/IcatuVtcsSUn9iswM+TDaotdmQPniUmrsrjRnMo8V/8woLltINez8XExIf0/I+B/3dixgMcz3VEbqJ9eUTCmnnOWbtzHzHlTdajF4F27M6BdCqnyME8n/ngQ8jeRY8kptzDaAJZtYTyiYRdiSnnZl6zAxfwLa9wJUMr51QLhvIwMfEb25GdHc1G5+m1x1MMk/mQmPiVrab/qRYU8w2X4IdM6DF0bzuR0Mx5xJQnmLPtREIXDuJ5phL5md0ZWvGRGV3YhNN4lsjnHMGSjKz4yIxBrM3tfM+33Mi2LEojPaiq4EigCyNpoplGZmd55qFH+Ue2Xh0NVJci8k+8YLFi+zv6SQAAAABJRU5ErkJggg=="
            }
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
