"use client";

import { Parallax, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
// import { Link, Element, Events, animateScroll, scrollSpy, scroller } from "react-scroll";
import { useEffect, useRef } from "react";
import { OverlayScrollbarsComponent, useOverlayScrollbars } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";
import "overlayscrollbars/overlayscrollbars.css";
// const scrollToTop = () => {
//   animateScroll.scrollToTop();
// };

export default function Home() {
  const bodyRef = useRef(null);
  const [initBodyOverlayScrollbars, getBodyOverlayScrollbarsInstance] = useOverlayScrollbars({
    defer: true,
    options: {
      paddingAbsolute: false,
      scrollbars: {
        theme: "os-theme-light",
        autoHide: "scroll",
        autoHideDelay: 500,
      },
    },
  });

  useEffect(() => {
    initBodyOverlayScrollbars(document.body);
  }, [initBodyOverlayScrollbars]);

  // useEffect(() => {
  //   const { current: body } = bodyRef;
  //   if (body) {
  //     initialize(body);

  //     return () => osInstance()?.destroy();
  //   }
  // }, [initialize, osInstance]);

  return (
    <div ref={bodyRef} data-overlayscrollbars-initialize="">
      {/* <Scrollbars
        renderThumbVertical={(props) => <div {...props} className="bg-gray-200 opacity-70 rounded-lg " />}
        renderTrackVertical={(props) => <div {...props} className="h-full m-2  text-right justify-end right-0" />}
        className="flex flex-col  min-h-screen  z-20 w-4 scroll-smooth"
        autoHide
        autoHideTimeout={400}
        autoHideDuration={350}
        universal> */}
      <VideoSection />
      <div id="" className=" h-screen w-full "></div>

      <Menu />
      {/* <SectionOne /> */}
      {/* <button onClick={scrollToTop}>To the top!</button> */}

      <div id="one" className=" h-screen bg-green-400 w-full ">
        S
      </div>
      <div id="two" className=" h-screen bg-red-400 w-full ">
        section 2
      </div>
      {/* <Component /> */}

      <div id="three" className=" h-screen bg-blue-400 w-full ">
        section 3
      </div>

      {/* </Scrollbars> */}
      {/* </div> */}
    </div>
  );
}

function VideoSection() {
  return (
    <Parallax className="w-full min-h-screen fixed top-0 left-0 -z-10">
      <video
        className=" h-screen w-full object-cover"
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

function Component() {
  return (
    <Parallax speed={100}>
      <div className="h-40 w-40 bg-purple-400">ax test</div>
    </Parallax>
  );
}

function Menu() {
  return (
    <nav className="w-full  bg-black sticky  top-0 z-10">
      <div className="w-full h-24 flex gap-3  text-white  flex-row items-center  justify-end">
        <a data-to-scrollspy-id="#one" href="#one">
          Section 1
        </a>
        <a data-to-scrollspy-id="#two" href="#two">
          Section 2
        </a>
        <a data-to-scrollspy-id="#three" href="#three">
          Section 3
        </a>
        {/* <Link href="#section-one">Hello</Link>
        <Link href="#section-two">Good</Link>
        <Link href="#section-three">Bye</Link> */}
      </div>
    </nav>
  );
}
