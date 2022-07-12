import Head from 'next/head';

type Props = {
  title: string;
};

export default function Helmet({ title }: Props) {
  return (
    <>
      <Head>
        <title>{`${title} | Delivery App`}</title>
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="preload"
          href="/fonts/SofiaProBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SofiaProLight.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SofiaProMedium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SofiaProRegular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SofiaProSemiBold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
    </>
  );
}
