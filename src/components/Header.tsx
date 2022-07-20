import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillBellFill, BsFillStarFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";

const Header = () => {
  return (
    <div className="bg-black">
      <div className="m-auto text-xs text-gray-300 flex items-center px-3 py-1.5 gap-4 justify-between max-w-7xl">
        <div className="flex items-center gap-5">
          <div className="logo flex items-center gap-2">
            <img className="w-4 h-4 object-center" src="https://i.drom.ru/misc/drom-logo/80x80.png?u=1" alt="" />
            <a href="" className="text-xl font-medium">дром</a>
          </div>
          <div className="place">Тюменская область</div>
          <ul className="flex gap-4">
            <li><a href="">Автомобили</a></li>
            <li><a href="">Спецтехника</a></li>
            <li><a href="">Запчасти</a></li>
            <li><a href="">Отзывы</a></li>
            <li><a href="">Каталог</a></li>
            <li><a href="">Шины</a></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 bg-red-600 text-white rounded-sm font-medium flex items-center">
            <AiFillPlusCircle className="mr-2 text-sm" /> Подать объявление
          </button>
          <div className="user">
            <div className="avatar text-xl flex gap-3">
              <a href="" className="user"><FaUser /></a>
              <a href="" className="user"><BsFillStarFill /></a>
              <a href="" className="user"><BsFillBellFill /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;