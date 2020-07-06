import {useEffect} from "react";
import Router from "next/router";
import * as gtag from "../gtag.js";

import "../styles.scss";

const App = ({ Component, pageProps }) => {
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		};
		Router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			Router.events.off('routeChangeComplete', handleRouteChange);
		}
	}, []);

return <Component {...pageProps} />

};

export default App;
