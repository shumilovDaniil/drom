import React, { useState } from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { fetchCars } from "../redux/features/carsSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const [pageNum, setPageNum] = useState(1);

  const toggleCarsPages = (page: number) => {
    if (pageNum >= 1 && pageNum <= 11) {
      dispatch(fetchCars(page));
      setPageNum(page);
    }
    console.log(pageNum);
  };

  return (
    <div className="flex items-center gap-4 text-blue-400 my-4">
      {pageNum >= 2 ?
        <Link onClick={() => toggleCarsPages(pageNum - 1)} to={"/auto"}><MdOutlineArrowBackIosNew /></Link> :
        <Link to={"/auto"} className="pointer-events-none"><MdOutlineArrowBackIosNew
          className="opacity-50" /></Link>}

      <div><Link onClick={() => toggleCarsPages(1)} to={"/auto"}>1</Link></div>
      <div><Link onClick={() => toggleCarsPages(2)} to={"/auto"}>2</Link></div>
      <div><Link onClick={() => toggleCarsPages(3)} to={"/auto"}>3</Link></div>
      <div><Link to={"/auto"}>4</Link></div>
      <div><Link to={"/auto"}>5</Link></div>
      <div><Link to={"/auto"}>6</Link></div>
      <div><Link to={"/auto"}>7</Link></div>
      <div><Link to={"/auto"}>8</Link></div>
      <div><Link to={"/auto"}>9</Link></div>
      <div><Link to={"/auto"}>10</Link></div>

      {pageNum <= 9 ?
        <Link onClick={() => toggleCarsPages(pageNum + 1)} to={"/auto"}><MdOutlineArrowForwardIos /></Link> :
        <Link to={"/auto"} className="pointer-events-none"><MdOutlineArrowForwardIos
          className="opacity-50" /></Link>}
    </div>
  );
};

export default Pagination;