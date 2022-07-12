import type { AppProps } from 'next/app';

import '../theme/global.scss';

function DeliveryApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default DeliveryApp;
