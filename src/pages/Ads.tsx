import React from "react";
import Pagination from "../components/Pagination";
import Title from "../ui/Title";
import CarList from "../components/CarList";

const Ads = () => {
  return (
    <div>
      <Title>Объявления</Title>
      <ul className="sort flex gap-2 mb-4">
        <li>Сортировка</li>
        <li><a href="src/pages/Ads" className="text-blue-600">отличная цена</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">год</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">пробег</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">двигатель</a></li>
        <li><a href="src/pages/Ads" className="text-blue-600">модель</a></li>
      </ul>

      <CarList />

      <Pagination />
    </div>
  );
};

export default Ads;