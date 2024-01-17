// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const imgMas = [
    "https://lh3.googleusercontent.com/pw/ABLVV848_T3iFk_vOKdMDihlijmH1PDdJNhvS5UATiiS23peI_9uBj2Xl7CNEgTQHlusaogXE9qqjo_EDkFSPEisLvCYUeRYqyK969F1S0tBjDrnMBXIj-FasSIJNgPcmJAyiOmeCLJPbLnHxaq0rMkZvR-m=w1229-h919-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/ABLVV87qSJ8iRHAA__0C2XE6gKFeAjkNZoMx_BMk2cSTtvoFVESTp2Tgy8XjJ6t4bJ-3YSjTts5Nhe5H0smP_6hDcxXAwK-NdZCD32gO-2URuhozEH299tn_CN9ZsLYGt6Vi1S8VPOnkH1wR4vQGET6DWTfX=w1229-h919-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/ABLVV87dWfanah7N_R8k33mEyEIn1MwsGWHCP3qkLC__g3dD7zNUOvJQ5iQWFPnrLMnILrEf3OZikh-EC6SFFlcw-BD_hZSH98QHrhZ0E2cxCz7kiiQ3Lrrp0Ddjvi-Za0_KhSvc5xvkMkZPq5-CcJJH_u96=w1229-h919-s-no-gm?authuser=0",
    "https://lh3.googleusercontent.com/pw/ABLVV85UkwlBWL_ML4UEyQA1fnN-qRTZOoF4L-D5QH0oiv7puzwNua-8Nrqhn6d4GsmyLRIEOy6p4l8mi1UCW9YVihzoKC2aTGDJypXo81VUPJjZbJc7cp3qgD1A45zb45xCn8IgBxlLg6EyZbos2obpbDHF=w1229-h919-s-no-gm?authuser=0",
  ];
  return (
    <div id="gallery">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {imgMas.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt="Vercel Logo"
              sizes="100vw"
              width={0}
              height={0}
              style={{
                width: "100%",
                height: "auto",
              }}
            />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}