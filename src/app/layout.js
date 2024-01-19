import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SriChinmoy Sumy",
  description:
    "Шрі Чінмой — духовний вчитель, який присвятив своє життя служінню людству, що прагне. Усіма своїми душевними жертвами – молитвами та медитаціями, літературними, музичними та художніми творами – Шрі Чінмой намагається надихнути людство. Ми сподіваємося, що простота, чистота і світло пропозицій Шрі Чінмоя також надихнуть вас.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={process.env.FAVICON} />
      </head>

      <body className={inter.className}>
        <div className="wraper">
          <Header />

          <section>{children}</section>

          <Footer />
        </div>
      </body>
    </html>
  );
}
