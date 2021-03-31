import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { TooslProvider } from "../hooks/useTools";
import "../styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TooslProvider>
      <Header />
      <Component {...pageProps} />
    </TooslProvider>
  );
}

export default MyApp;
