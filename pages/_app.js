import "../styles/tailwind.css";
import { ProductProvider } from "../src/context/ProductContext";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Component {...pageProps} />
    </ProductProvider>
  );
}

export default MyApp;
