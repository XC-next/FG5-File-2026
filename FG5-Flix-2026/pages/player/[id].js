import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import VideoPlayer from "../../components/VideoPlayer";
import Footer from "../../components/Footer";

export default function PlayerPage() {
  const router = useRouter();
  const { id } = router.query;
  // For demo we use a placeholder video source. Replace with stream URLs when ready.
  const videoSource = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  return (
    <>
      <Head>
        <title>Player — FG5 Flix</title>
      </Head>

      <div className="container">
        <Navbar />
        <div style={{marginTop:12}}>
          <VideoPlayer src={videoSource} title={`Playing movie ${id || ""}`} />
        </div>
        <Footer />
      </div>
    </>
  );
}
