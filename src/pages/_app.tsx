import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "@store/index";
import { SEO } from "@components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<SEO />
			<Toaster position="bottom-center" />
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
