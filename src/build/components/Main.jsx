import React from 'react'
import desktop_img from '../../images/image-hero-desktop.png'
import mobile_img from '../../images/image-hero-mobile.png'
import databiz from "../../images/client-databiz.svg";
import audio from '../../images/client-audiophile.svg'
import meet from '../../images/client-meet.svg'
import maker from '../../images/client-maker.svg'

function Main() {
  return (
    <main>
        <picture>
          <source media="(min-width:465px)" srcSet={desktop_img} />
          <img src={mobile_img} alt="hero image" />
        </picture>
      <section>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="clients">
          <img src={databiz} alt="databiz" />
          <img src={audio} alt="audio" />
          <img src={meet} alt="meet" />
          <img src={maker} alt="maker" />
        </div>
      </section>
    </main>
  );
}

export default Main