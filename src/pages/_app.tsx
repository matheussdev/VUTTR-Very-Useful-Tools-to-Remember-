import { AppProps } from "next/app";
import { Header } from "../components/Header";
import "../styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
