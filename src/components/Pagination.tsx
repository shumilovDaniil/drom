import React from "react";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const Pagination = () => {
  return (
    <div className="flex items-center gap-4 text-blue-400 my-4">
      <a href=""><MdOutlineArrowBackIosNew /></a>
      <div><a href="">1</a></div>
      <div><a href="">2</a></div>
      <div><a href="">3</a></div>
      <div><a href="">4</a></div>
      <div><a href="">5</a></div>
      <div><a href="">6</a></div>
      <div><a href="">7</a></div>
      <div><a href="">8</a></div>
      <div><a href="">9</a></div>
      <div><a href="">10</a></div>
      <a href=""><MdOutlineArrowForwardIos /></a>
    </div>
  );
};

export default Pagination;