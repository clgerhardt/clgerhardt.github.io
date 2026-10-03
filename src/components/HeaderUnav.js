

import React from "react";

const HeaderUnav = () => {
  return (
    <div className="grid md:grid-cols-3 pt-10 px-10 md:px-24 text-lg">
      <div className="col-span-2">
        <h1><a href="/">&lt;Christian /&gt;</a></h1>
      </div>
      <div className="md:place-self-end">
        <button className="pr-3 underline" onClick={()=>{window.location.hash = "experience";}}>Experience</button>
        <button className="underline" onClick={()=>{window.location.hash = "projects";}}>Projects</button>
      </div>
    </div>
  )
}

export default HeaderUnav;