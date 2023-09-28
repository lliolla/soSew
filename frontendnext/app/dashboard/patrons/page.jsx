import React from "react";
import Card from "../../components/Card";

const patrons = () => {
  return (
    <div className="-mt-24 px-24 ">
      <div className="flex justify-between items-end pb-4">
        <h2 className="text-2xl">Gestion des patrons</h2>
        <button className="btn"> Ajouter </button>
      </div>

      <div className=""> filter</div>
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
