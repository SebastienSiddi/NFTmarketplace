import "@/styles/globals.css";
import { NavBar, Footer } from "@/components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NFTMarketplaceProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </NFTMarketplaceProvider>
    </div>
  );
}
