import React from "react";
import Car from "../components/Car";
import Pagination from "../components/Pagination";

const Ads = () => {
  return (
    <div>
      <h3>Объявления</h3>
      <ul className="sort flex gap-2 mb-4">
        <li>Сортировка</li>
        <li><a href="src/pages/Ads" className="text-blue-600">отличная цена</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">год</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">пробег</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">двигатель</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">модель</a></li>
      </ul>

      <div className="items w-4/5">
        <Car />
        <Car />
        <Car />
        <Car />
      </div>

      <Pagination />
    </div>
  );
};

export default Ads;