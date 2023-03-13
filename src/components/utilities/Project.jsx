import React from "react";

export default function Project({ name, img, githubLink, liveLink }) {
  return (
    <div className="card w-10/12 md:w-7/12 m-1 px-1 md:m-4 md:p-4 text-night-3 hover:text-snow-3 bg-snow-4 dark:bg-night-4 hover:bg-night-1 dark:hover:bg-night-3">
      <h2 className="card-title pl-2 md:pl-0 py-2 dark:text-snow-3"> {name}</h2>

      <figure>
        <img src={img} alt={name} />
      </figure>

      <div className="card-body">
        <div className="card-actions justify-start">
          <a href={githubLink} target="_blank">
            <button className="btn btn-sm  bg-frost-3 text-night-2 dark:text-night-3 hover:bg-frost-2">
              repository
            </button>
          </a>
          <a href={liveLink} target="_blank">
            <button className="btn btn-sm bg-frost-3 text-night-2 dark:text-night-3 hover:bg-frost-2">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
