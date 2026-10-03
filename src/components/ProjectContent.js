import React from "react";

const ProjectContent = () => {
  return (
    <div className="pt-10 px-10 md:px-24 max-w-4xl h-screen">
      <h1 className="text-3xl text-[#e1ad01]">Projects</h1>
      <hr className="rounded border-gray-100 border-2 my-3"></hr>
      <div className="grid grid-cols-1 justify-between gap-2 pb-4">
        <div className="bg-slate-400 bg-opacity-40 hover:bg-opacity-70 rounded-md p-4">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-lg">Better Twitch Sidebar Extension</h2>
            </div>
            <div className="place-self-end">
              <span className="flex text-sm">
                <img
                  className="w-5 h-5 mr-2"
                  src={require("../assets/img/github-mark/github-mark.png")}
                  alt="github logo"
                ></img>{" "}
                <a
                  className="underline"
                  href="https://github.com/clgerhardt/better-twitch-sidebar-extension"
                >
                  GitHub
                </a>
              </span>
            </div>
          </div>
          <hr className="rounded border-gray-100 border-2 my-3"></hr>
          <div>
            <p>
              Chrome extension that adds a sidebar to Twitch.tv, allowing users
              to view their followed channels in a more organized manner.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-between gap-2 pb-4">
        <div className="bg-slate-400 bg-opacity-40 hover:bg-opacity-70 rounded-md p-4">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-lg">Risk of Resources</h2>
            </div>
            <div className="place-self-end">
              <span className="text-sm">
                <a className="underline" href="https://riskofresources.com/">
                  Site
                </a>
              </span>
            </div>
          </div>
          <hr className="rounded border-gray-100 border-2 my-3"></hr>
          <div>
            <p>
              A site that provides the ability to make and participate in Risk of Rain 2 modded speed run challenges with others.
              Built in Astro.js, Svelte, and Tailwind CSS with a GoLang backend.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-between gap-2 pb-4">
        <div className="bg-slate-400 bg-opacity-40 hover:bg-opacity-70 rounded-md p-4">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="text-lg">Teamfight Tactics Remake</h2>
            </div>
            <div className="place-self-end">
              <span className="flex text-sm">
                  <img
                  className="w-5 h-5 mr-2"
                  src={require("../assets/img/github-mark/github-mark.png")}
                  alt="github logo"
                ></img>{" "}
                <a className="underline" href="https://github.com/clgerhardt/tft-remake">
                  GitHub
                </a>
              </span>
            </div>
          </div>
          <hr className="rounded border-gray-100 border-2 my-3"></hr>
          <div>
            <p>
              Rebuilt the game Teamfight Tactics in Godot Engine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
