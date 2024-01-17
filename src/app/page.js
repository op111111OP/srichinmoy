"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Swipe from "../components/Swiper/Swipe";
import Strit from "@/components/Strit/Strit";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.image_start_box}>
        <div className={styles.image_start}>
          <Image
            src="https://www.srichinmoy.org/sites/all/themes/srichinmoy2016/images/photo-bg.jpg"
            alt="Vercel Logo"
            sizes="100vw"
            width={2000}
            height={673}
            style={{
              minWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.image_start_test_box}>
          <div className={styles.image_start_test}>
            ``Кожен з нас шукач,
            <br /> Йдучи дорогою вічності,
            <br /> У нього немає ні початку, ні кінця.
            <br /> —Шрі Чінмой
          </div>
          <div className={styles.image_start_button_box}>
            <a
              href="#gallery"
              className={` ${styles.buto1} ${styles.image_start_button} `}
            >
              галирея спогадів
            </a>
            <a
              href="#strit"
              className={` ${styles.buto2} ${styles.image_start_button} `}
            >
              адреса нашого центру
            </a>
            <a
              href="#world"
              className={` ${styles.buto3} ${styles.image_start_button} `}
            >
              Справжнє щастя
            </a>
          </div>
        </div>
      </div>
      <div className={styles.definition_text_box}>
        <div className={styles.definition_text}>
          <b>Ш</b>рі Чінмой — духовний вчитель, який присвятив своє життя
          служінню людству, що прагне. Усіма своїми душевними жертвами –
          молитвами та медитаціями, літературними, музичними та художніми
          творами – Шрі Чінмой намагається надихнути людство.
          <br />
          <br />
          Ми сподіваємося, що простота, чистота і світло пропозицій Шрі Чінмоя
          також надихнуть вас.
        </div>
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAQAAAACNCElAAACpklEQVRIx62WTUgVURiGx9QiTU1KWmRJZCWBQWQWREYRaVFBEblpU0GWbXLrIsSggqAfNMqNFNeF+ki/RIFXbZPQj0hQJFKWBUGEkoallb0tnJl778zcuXMh3s2cM9955pzz/Y2B4VIBx2mmlzcMMsAjasj3sDKlKDlfrqKFaeTQFGeSh53wAFnqJycZWMheOEYzByimiFJqeGrODpIWFPbCXDLEUXIdS8r5hhAPg8EaEOI310j3vJtCJhBibRBYCzvYz9L4XmOL996csCIW+EAiuon463RDLCyMGKOTOjISwOYygdjsB7tq+/AdWY7llVxkTtS4C7HP/5h3GDdxpx2wK4hXLLTHbYiqRA7IopD3iEYHrAMhKuxxP6IksTfTEKLUATvEJ16SZ4+FEofGfEJ8pN3j0mdFPS9H1CWG5fhGmKVzdCdXNfxUzOz/B3NqHin+sFqntzy1mAZGGGeYJiriwZoQBQFgmaynyw52SHPDdiNGSQ18zBs27jUZsbBcJhFfk4AZ7KLTxD3xKo73HeabuEeYu5xlQxzgERNXH4GVmcWx0GG6JqoLdLPVKzSoNt/nRQJSiAseX94e01aqvOKMPoSosyZ7kDuJ7ULUyoCNq/WAlSNE78xUOp8RX3wveydhE3fKnQG8RYxYufkT8Tih9y6ZuHUu2OUILIvv3o3MpQcI0eOCVUdg2fxBhAPF1jBCrHbAKhGTM1OpDATcmUEJQtxywI4hpiyTRsSzgHHfhvhFZgysHjFkGRxETFkGCWuGECtiYO2IVssgByH2Btzbc8S2qDhLYRRRFjFoQYQCwq4jK/FkyGAjoi860RfxAwU8aAfTMRnQhsiPrWfLEB8Cwc6zJyrRlyBOuivtSm5zmOxkOoEMQjTGayhFrj8Of+VRbfWAfzadCBnbBRA5AAAAAElFTkSuQmCC"
          alt="Vercel Logo"
          sizes="1vw"
          width={38}
          height={38}
        />
      </div>
      <div className={styles.image_end_box}>
        <div className={styles.image_end}>
          <Image
            src="https://www.srichinmoy.org/sites/all/themes/srichinmoy2016/images/desktop/45.jpg"
            alt="Vercel Logo"
            sizes="100vw"
            width={2000}
            height={673}
            style={{
              //   width: "100%",
              height: "auto",
              maxHeight: "600px",
              minWidth: "100%",
            }}
          />
        </div>
        <div className={styles.image_end_test_box}>
          <div className={styles.image_end_test_h1}>
            <div className={styles.image_end_test_h3} id="world">
              {" "}
              Мир…{" "}
            </div>

            <div className={styles.image_end_test_h4}>
              «Тільки завдяки внутрішньому миру ми можемо мати справжню зовнішню
              свободу».
              <br /> ШРІ ЧІНМОЙ
            </div>
          </div>
          <div className={styles.image_end_test_p}>
            <div className={styles.image_end_test_p1}>
              Жодна ціна не надто висока, щоб заплатити за внутрішній мир. Мир —
              це гармонійний контроль життя. Він наповнений життєвою енергією.
              Це сила, яка легко перевершує всі наші світські знання. Проте воно
              не відокремлене від нашого земного існування. Якщо ми відкриємо
              правильні шляхи всередині, цей спокій можна відчути тут і зараз.
              <br />
              <br />
              Мир вічний. Ніколи не пізно мати мир. Для цього завжди настав час.
              Ми можемо зробити своє життя справді плідним, якщо не будемо
              відірвані від нашого Джерела, яким є Мир Вічності.
              <br />
              <br /> Найбільше нещастя, яке може спіткати людину, це втрата
              внутрішнього спокою. Жодна зовнішня сила не може позбавити його
              цього. Це його власні думки, його власні дії позбавляють його
              цього.
            </div>
            <div className={styles.image_end_test_p2}>
              Наш найбільший захист полягає не в наших матеріальних досягненнях
              і ресурсах. Весь скарб світу — порожнеча для нашої божественної
              душі. Наш найбільший захист полягає в причасті нашої душі до
              Всеживлячого і всевиповнюючого Миру. Наша душа живе в Мирі і живе
              для Миру. Якщо ми живемо мирним життям, ми завжди збагачуємося і
              ніколи не збідніємо. Безгоризонтальний наш внутрішній мир; як
              безмежне небо, воно охоплює все.
              <br />
              <br /> Уривок із «Йоги та духовного життя» Шрі Чінмоя
            </div>
          </div>
        </div>
      </div>
      <div className={styles.definition_text_box}>
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAQAAAACNCElAAACpklEQVRIx62WTUgVURiGx9QiTU1KWmRJZCWBQWQWREYRaVFBEblpU0GWbXLrIsSggqAfNMqNFNeF+ki/RIFXbZPQj0hQJFKWBUGEkoallb0tnJl778zcuXMh3s2cM9955pzz/Y2B4VIBx2mmlzcMMsAjasj3sDKlKDlfrqKFaeTQFGeSh53wAFnqJycZWMheOEYzByimiFJqeGrODpIWFPbCXDLEUXIdS8r5hhAPg8EaEOI310j3vJtCJhBibRBYCzvYz9L4XmOL996csCIW+EAiuon463RDLCyMGKOTOjISwOYygdjsB7tq+/AdWY7llVxkTtS4C7HP/5h3GDdxpx2wK4hXLLTHbYiqRA7IopD3iEYHrAMhKuxxP6IksTfTEKLUATvEJ16SZ4+FEofGfEJ8pN3j0mdFPS9H1CWG5fhGmKVzdCdXNfxUzOz/B3NqHin+sFqntzy1mAZGGGeYJiriwZoQBQFgmaynyw52SHPDdiNGSQ18zBs27jUZsbBcJhFfk4AZ7KLTxD3xKo73HeabuEeYu5xlQxzgERNXH4GVmcWx0GG6JqoLdLPVKzSoNt/nRQJSiAseX94e01aqvOKMPoSosyZ7kDuJ7ULUyoCNq/WAlSNE78xUOp8RX3wveydhE3fKnQG8RYxYufkT8Tih9y6ZuHUu2OUILIvv3o3MpQcI0eOCVUdg2fxBhAPF1jBCrHbAKhGTM1OpDATcmUEJQtxywI4hpiyTRsSzgHHfhvhFZgysHjFkGRxETFkGCWuGECtiYO2IVssgByH2Btzbc8S2qDhLYRRRFjFoQYQCwq4jK/FkyGAjoi860RfxAwU8aAfTMRnQhsiPrWfLEB8Cwc6zJyrRlyBOuivtSm5zmOxkOoEMQjTGayhFrj8Of+VRbfWAfzadCBnbBRA5AAAAAElFTkSuQmCC"
          alt="Vercel Logo"
          sizes="1vw"
          width={38}
          height={38}
        />
        <div className={styles.image_addressс}>
          проспект Михайла Лушпи, 54, Суми, Сумська область
        </div>
      </div>
      <div className={styles.image_maps_box} id="strit">
        <Strit />
        {/* <Image
          src="https://lh3.googleusercontent.com/fife/AGXqzDlRBlUkROtpx_HkkATo5E2WVXdyQ9Hm1PyIxpJo7Bkq1ZeTJ1U63HIrosfU21fVXAzdHJhKqy9vSoVG8l532fgCtYubyFM85b4nHV-0lz8jlGVAo7n-Dftpk5BKXLmd3FNlPAMoaIqhvZRmoAhu68h7OqGcVgg403lM96M_D7LzJxJJTetKCcJ3A4PcOqiaur_tLTo01a9wYEdx_cHMwIbQFoI3XL5Ov9NKg7zOG9_D9JH-AAnJ8TQQbfXoj_K84vado6CMdZH3dT9upUGjoZFVcHPIefEL90y9aMlrtFyMz9l2RtEiI7e3UN-iXTr567EHSlKwZ5vXl4L8qDopFPPaG2Jzy8yjh-HWKYxB3gaCiU7EPzMilSIRXA_rhn7p-maSLCDB1_jhQC2_pKT6JJWszUzi57UKpiSXJuAFk1NYX_xUbd5ZIJ43sgk8oFSBKewC9mUiybIk4mZDKOxnzUslFUppOhrEhKRN6cSSHFuZXoXKbTZhbX06gBvX3ws4lqYB7zGAL2fRaYmdIkWa5_KYQXzCJweX9v8Cjn7iJid6LXqyriKNy27AufdmZRRqG7ZJr0YzKy_LThqMHmDYbQu-GjgKovLb6y6eT8KgHNTsDs2o4Y8dkKcpFAAUQY8XxMlVD9aMzisitLT-Ov20mImnhXH-0JJPx5ZCSuzABbsTn4VfAxkoDZw2sl3_qrwxyNmLcOwJd0cn-1AruGcqIrq9S7_id6-H7RoNVOpIiuhL1_bjOI3QFLZwhNThrJK6GcmMtFTsQ6SNlTFhmG8LpRhXPBcbCX5R-cPGvTdsIaF4QeAwvCfdJmKlpdc9oOxs-JYHSOwD9k5RHljqE3mF1NcUSKnyv2hfrBDqZvFW41FKUxe8BiqcKeqZOAsu8w4levvwyDdjhGVdErx_9f06lokS_LfRultKOn3Osb2OoxF4wvzGzR7glKPHGEsMfxuHU20VLY_fvSHxEWLXk08esB97E05xAHNjkP7megh_dBqxrue3fOHflq-6QYQxsjyGy6OsepcDIo7OwESTqsOwmSYEOmTwN7wL4sNLh9SWN5f4J2qEn2rAGR8FXgCzxieQuqrlei0l2kxJYMgGhYVAnLyLMIj34bl6JKpjqv8DVgwHJaJdvEWYjMCFd9X92HOg7Pm6FPRoN1LAm2aHKR8q5br_x7UC5cIT283qPqQhHB8EJJcOnguWyjo2s9pdQgf9GD_cs7_TFUJQVtffm4s5ZyxwmrXgpwTtoid3_rINK6fP7m-7yQdas5gLptbi0Mr1jB68JgPsXYmvPaB7VwSGjIhhosA83LTfEJuv-NbLs-ZdNCcDM6n7bL-2NZ0iwMFzuQgvOQCaux9_Da8FkuIFjIFFfL5pOUShKdBAqsv8wOPkfFn4q-SIrGoWWZYG4RwLK1Cg5gzchcWHweqAKTcM05ikc2Z-RJZ6YP7vgdIVllsJ9LpCzA3u0X-0gCCyrcu15ThNzNDaVZLFCxjp1KjO08LIUHgA_YgFuibEPzN9s2gXt7CzoWsMRnV604cGselOZbU-dslklH1ED7xaliv5nShcgaDOrhyOV6N3scBAD58eZ9BY8Wjqg4hCQs43qDA7CfxnLIBYK391HsmkKedfGqh4du8umr-s0GU=w1109-h607"
          alt="Vercel Logo"
          sizes="100vw"
          width={2000}
          height={673}
          style={{
            height: "auto",

            maxWidth: "940px",
          }}
        /> */}
      </div>
      <div className={styles.definition_text_box}>
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAQAAAACNCElAAACpklEQVRIx62WTUgVURiGx9QiTU1KWmRJZCWBQWQWREYRaVFBEblpU0GWbXLrIsSggqAfNMqNFNeF+ki/RIFXbZPQj0hQJFKWBUGEkoallb0tnJl778zcuXMh3s2cM9955pzz/Y2B4VIBx2mmlzcMMsAjasj3sDKlKDlfrqKFaeTQFGeSh53wAFnqJycZWMheOEYzByimiFJqeGrODpIWFPbCXDLEUXIdS8r5hhAPg8EaEOI310j3vJtCJhBibRBYCzvYz9L4XmOL996csCIW+EAiuon463RDLCyMGKOTOjISwOYygdjsB7tq+/AdWY7llVxkTtS4C7HP/5h3GDdxpx2wK4hXLLTHbYiqRA7IopD3iEYHrAMhKuxxP6IksTfTEKLUATvEJ16SZ4+FEofGfEJ8pN3j0mdFPS9H1CWG5fhGmKVzdCdXNfxUzOz/B3NqHin+sFqntzy1mAZGGGeYJiriwZoQBQFgmaynyw52SHPDdiNGSQ18zBs27jUZsbBcJhFfk4AZ7KLTxD3xKo73HeabuEeYu5xlQxzgERNXH4GVmcWx0GG6JqoLdLPVKzSoNt/nRQJSiAseX94e01aqvOKMPoSosyZ7kDuJ7ULUyoCNq/WAlSNE78xUOp8RX3wveydhE3fKnQG8RYxYufkT8Tih9y6ZuHUu2OUILIvv3o3MpQcI0eOCVUdg2fxBhAPF1jBCrHbAKhGTM1OpDATcmUEJQtxywI4hpiyTRsSzgHHfhvhFZgysHjFkGRxETFkGCWuGECtiYO2IVssgByH2Btzbc8S2qDhLYRRRFjFoQYQCwq4jK/FkyGAjoi860RfxAwU8aAfTMRnQhsiPrWfLEB8Cwc6zJyrRlyBOuivtSm5zmOxkOoEMQjTGayhFrj8Of+VRbfWAfzadCBnbBRA5AAAAAElFTkSuQmCC"
          alt="Vercel Logo"
          sizes="1vw"
          width={38}
          height={38}
        />
        <div className={styles.image_addressс}>Галирея спогадів</div>
      </div>
      <Swipe />
    </main>
  );
}
