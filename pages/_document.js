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
				<script src={"../google-tag-manager.js"} defer/>
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