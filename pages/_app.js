import "@/styles/globals.css";
import { useRouter} from "next/router";

function MyApp({ Component, pageProps }) {
  // https://github.com/vercel/next.js/issues/9992
  const { asPath } = useRouter();
  return <Component {...pageProps} key={asPath} />;
}

export default MyApp;
