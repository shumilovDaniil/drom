import React, { FC } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { ICar } from "../types/types";


const Car: FC<ICar> = (car) => {
  const {
    id,
    title,
    carYear,
    horsepower,
    fuelType,
    mileage,
    VIN,
    img,
    price,
    location,
    publicationDate,
    owner
  } = car;

  return (
    <div className="item ">
      <a className="flex justify-between gap-4 p-4 rounded-lg hover:bg-gray-100 border-gray-200 border-t-2 border-b-2 "
         href="">
        <img className="w-60 h-40 object-cover rounded-lg" width="240" height="180"
             src={img}
             alt="" />
        <div className="flex-auto">
          <h3>{title}, {carYear}</h3>
          <p>{horsepower} л.с, {fuelType}, {mileage} км</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span>{price} ₽</span>
            <span className="py-0.5 px-2 text-xs bg-green-200 text-green-600 rounded-xl">нормальная цена</span>
          </div>
          <div className="flex flex-col">
            <span>{location}</span>
            <span>{publicationDate}</span>
          </div>
        </div>
        <div>
          <a href="" className="text-gray-300 hover:text-red-600">
            <BsFillStarFill />
          </a>
        </div>
      </a>
    </div>
  );
};

export default Car;