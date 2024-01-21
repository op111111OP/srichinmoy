import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.box}>
      <div className={styles.box_box}>
        <div> пр. Лушпи 54 кожна</div> <div>неділя 15:00 </div>
      </div>
      <div className={styles.box_box}>
        <div> вхід-вільний</div> <div>записатися-обов&apos;язково </div>
        <div> тел 0991703480 Люба</div>
      </div>
    </div>
  );
}
