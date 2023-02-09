import Head from "next/head";
import LivepeerUploader from "@/helpers/uploadFile/uploader";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const Home = () => {
  return (
    <>
      <Head>
        <title>Vidmon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="text-3xl">content / body</div>
        <ConnectButton />
        <div>{/* <LivepeerUploader /> */}</div>
      </main>
    </>
  );
};
export default Home;
