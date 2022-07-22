import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillBellFill, BsFillStarFill } from "react-icons/bs";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black mb-5">
      <div className="m-auto text-xs text-gray-300 flex items-center px-3 py-1.5 gap-4 justify-between max-w-7xl">
        <div className="flex items-center gap-5">
          <Link to="/" className="text-xl flex items-center font-medium gap-2">
            <img className="w-4 h-4 object-center"
                 src="https://i.drom.ru/misc/drom-logo/80x80.png?u=1"
                 alt="" />дром
          </Link>
          <div className="place">Тюменская область</div>
          <ul className="flex gap-4">
            <li><Link to="/auto">Автомобили</Link></li>
            <li><Link to="/">Спецтехника</Link></li>
            <li><Link to="/">Запчасти</Link></li>
            <li><Link to="/">Отзывы</Link></li>
            <li><Link to="/">Каталог</Link></li>
            <li><Link to="/">Шины</Link></li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/create-ad" className="p-2 bg-red-600 text-white rounded-sm font-medium flex items-center">
            <AiFillPlusCircle className="mr-2 text-sm" />Подать объявление
          </Link>
          <div className="user">
            <div className="avatar text-xl flex gap-3">
              <Link to="/" className="user"><FaUser /></Link>
              <Link to="/" className="user"><BsFillStarFill /></Link>
              <Link to="/" className="user"><BsFillBellFill /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;