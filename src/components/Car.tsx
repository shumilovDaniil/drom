import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const Car = () => {
  return (
    <div className="item">
      <a className="flex gap-4 p-4 rounded-lg hover:bg-gray-100 border-gray-200 border-t-2 border-b-2 "
         href="">
        <img className="w-60 h-40 object-cover rounded-lg" width="240" height="180"
             src="https://s.auto.drom.ru/photo/QY2r94Jk2FO_JZ1n_r8ss6bSffWyq61TBs2L0v6eh8U3335yg_NjRR8PiGksF7COQJ5N3q-0rwnsndQo8PbniTnWIPA.jpg"
             alt="" />
        <div>
          <h3>Mitsubishi Outlander, 2008</h3>
          <p>2.4 л (170 л.с), бензин, вариатор, 4WD, 189 тыс. км</p>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span>1 050 000 ₽</span>
            <span className="py-0.5 px-2 text-xs bg-green-200 text-green-600 rounded-xl">нормальная цена</span>
          </div>
          <div className="flex flex-col">
            <span>Юргинское</span>
            <span>сегодня</span>
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