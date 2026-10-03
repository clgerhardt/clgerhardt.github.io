import React from 'react';

const HomeContent = () => {
  return (
    <div className="pt-10 px-10 md:px-24 max-w-4xl">
      <p className="text-xl">Hello - I'm Christian Gerhardt</p>
      <hr className="rounded border-gray-100 border-2 md:w-1/2"></hr>
      <p className="text-lg mt-4">
        Howdy, by day I'm a software engineer, gamer and rock climber! By night,
        I'm sleeping.
      </p>
      <img
        src={require("../assets/img/me_secondary.jpeg")}
        alt=""
        className="rounded-lg my-4"
      />
      <p className="mb-10">
        I'm currently working as a software engineer at{" "}
        <a
          href="https://www.t-mobile.com/"
          className="text-[#e1ad01] underline"
          target="_blank"
          rel="noreferrer"
        >
          T-Mobile
        </a>
        , where I work on the postpaid account services team. I have prior
        experience working at{" "}
        <a
          href="https://www.HNTB.com/"
          className="text-[#e1ad01] underline"
          target="_blank"
          rel="noreferrer"
        >
          HNTB
        </a>{" "}
        as an application developer building stakeholder engagement experiences.
        <br></br>
        <br></br>I graduated from Valdosta State University with a Bachelors in
        Computer Science and a minor in Anthropology. I have a passion for
        software development and I am always looking for ways to improve my
        skills. I am currently learning about game development and design. I
        like to spend my free time remaking old games and creating new ones. I'd
        like to break out into the game development world professionally one
        day.
        <br></br>
        <br></br>
        My favorite games are:
        <ul className="list-disc list-inside">
          <li>Fallout 3 & 4</li>
          <li>Risk of Rain 2</li>
          <li>Teamfight Tactics (Started w/ Dota Auto Chess)</li>
          <li>Halo 3 / Reach</li>
          <li>Dark Souls (In this order: 1,3,2)</li>
          <li>Borderlands Series</li>
          <li>Destiny</li>
        </ul>
        <br></br>
        I'm also a rock climber! I've been climbing for about 3 years now and I
        love it. I've been to a few climbing gyms and outdoor climbing spots.
        I've been to the Stone fort in Tennessee, and I've been to the Sand Rock
        in Alabama. I've also been to a few climbing gyms in Atlanta, Georgia.
        I'm always looking for new climbing partners and new climbing spots to
        explore. My current climbing goals are to climb a V6 and a 5.12 outside.
      </p>
    </div>
  );
}

export default HomeContent;
