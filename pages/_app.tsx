import "tailwindcss/tailwind.css";
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
