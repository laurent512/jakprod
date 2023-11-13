"use client";
import Image from "next/image";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header2 />
      <div className=" h-screen w-full "> </div>
      <div className=" h-screen bg-green-400 w-full ">section 1 </div>
      <div className=" h-screen bg-red-400 w-full ">section 2 </div>
      <div className=" h-screen bg-blue-400 w-full ">section 3 </div>
      {/* <Component /> */}
    </main>
  );
}

function Header2() {
  return (
    <Parallax className="w-full min-h-screen fixed top-0 left-0 -z-10">
      <video
        className=" h-full w-full object-cover"
        autoPlay
        loop
        playsInline
        preload="auto"
        muted
        // poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea.jpg"
        src="/welcome.mp4"
      />
    </Parallax>
  );
}
function Header() {
  return (
    <ParallaxBanner className="w-full min-h-screen ">
      <ParallaxBannerLayer className="fixed top-0 left-0">
        <video
          className=" h-full w-full object-cover"
          autoPlay
          loop
          playsInline
          preload="auto"
          muted
          // poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea.jpg"
          src="http://localhost:3000/welcome.mp4"
        />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
}

function Component() {
  return (
    <Parallax startScroll={0} endScroll={0}>
      <div className="h-40 w-40 bg-red-400"></div>
    </Parallax>
  );
}

{
  /* <Wrapper>
  <ParallaxBanner
    // className={styles.bannerBg}
    layers={[
      {
        speed: -30,
        children: (
          <video
            className={styles.video}
            autoPlay
            loop
            playsInline
            preload="auto"
            muted
            poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea.jpg"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/boats-at-sea-720.mp4"
          />
        ),
      },
    ]}>
    <div className={styles.parallaxChildren}>
      <h1>Video Background</h1>
    </div>
  </ParallaxBanner>
</Wrapper>; */
}
