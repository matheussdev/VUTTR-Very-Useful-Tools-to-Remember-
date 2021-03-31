import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { TooslProvider } from "../hooks/useTools";
import "../styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TooslProvider>
      <div className="container">
        <Header />
        <Component {...pageProps} />
      </div>
    </TooslProvider>
  );
}

export default MyApp;
