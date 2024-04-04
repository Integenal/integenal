import ScrollObs from "../methods/scroll";
import type { AppProps } from "next/app";

function Myweb({ Component, pageProps }: AppProps) {
  return (
    <>
      {typeof window !== "undefined" && (
        <ScrollObs>{<Component {...pageProps} />}</ScrollObs>
      )}{" "}
    </>
  );
}
export default Myweb;
