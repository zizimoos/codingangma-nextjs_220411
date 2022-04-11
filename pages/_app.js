import "../styles/globals.css";
import Footer from "./src/component/Footer";
import Top from "./src/component/Top";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
