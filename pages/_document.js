import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../gtag.js';

export default class MyDocument extends Document {
	render() {
		return (
			<html>
			<Head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_TRACKING_ID}', {
							  page_path: window.location.pathname,
							});
						  `,
					}}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html:`
							(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-NLB6CZL');`}}
				/>
			</Head>
			<body>
				<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NLB6CZL"
						height="0"
						width="0"
						style="display:none;visibility:hidden"
				/>

				<Main />
				<NextScript />
			</body>
			</html>
		)
	}
}