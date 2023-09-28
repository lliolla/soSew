import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { AiOutlineCloseCircle,AiOutlineEdit } from "react-icons/ai";
const Card = () => {
  return (
    <div className="lg:col-span-2 col-span-1 bg-white w-full border p-2 m-2 rounded-lg card">
      <div className="flex justify-between">
        <figure>
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <details className="dropdown dropdown-bottom">
          <summary className="btn btn-circle btn-sm">
            <CiMenuKebab />{" "}
          </summary>
          <ul
            tabIndex={0}
            className="mt-1  z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-36"
          >
            <li>
              <a onClick={console.log("click edit")} > <AiOutlineCloseCircle/> Modifier</a>
            </li>
            <li>
              <a onClick={console.log("click delate")} > <AiOutlineEdit/> Supprimer</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="card-body">
        <h2 className="card-title">Titre</h2>
        <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipis? </p>
        <div className="py-2 flex flex-row ">
          <div className="badge bg-amber-600 ">Adulte</div>
          <div className="badge  bg-fuchsia-400 ">chemise</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
