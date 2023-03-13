import React, { useState, useRef, useEffect } from "react";
import Socials from "../utilities/Socials";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import NET from "vanta/dist/vanta.net.min";

export default function About() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="about" ref={myRef} className="hero min-h-screen ">
      <div className="hero-content text-center z-10">
        <div className="max-w-md ">
          <h1 className="text-5xl font-bold text-snow-4">Hi, I am Chaitanya</h1>
          <p className="py-6 text-snow-2">
            Full stack developer. I Help Companies Enhance Their Web Development Process with
            Efficient and Organized Solutions.
          </p>

          <div className="btn-group">
            <Socials link="https://github.com/hokageCV" Icon={FaGithub} />
            <Socials link="https://www.linkedin.com/in/chaitanya-varu/" Icon={FaLinkedinIn} />
            <Socials link="https://twitter.com/ChaitanyaVaru" Icon={FaTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}
