import React from "react";
import Card from "../../components/Card";
import {AiOutlineSearch } from "react-icons/ai";

const patrons = () => {
  return (
    <div className="-mt-24 px-24 ">
      <h2 className="text-2xl">Gestion des patrons</h2>
      <div className="flex justify-between items-end pb-4">
      <input type="range" min={0} max="100"  className="range" step="25" />

      <div class="relative">
                        <select
                            class=" h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>Adulte</option>
                            <option>Enfants</option>
                            <option>Accessoire</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
      <div className="flex  items-center ">
        <AiOutlineSearch className="text-slate-50 h-5 w-5 m-2" />
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered h-8"
        />
        <div>

        </div>
      </div>
      <button className="btn"> Ajouter </button></div>
      <div className="py-4 grid md:grid-cols-2 lg:grid-cols-6 gap-2 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default patrons;
