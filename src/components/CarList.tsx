import React, { FC, useEffect } from "react";
import Car from "./Car";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchCars } from "../redux/features/carsSlice";

interface CarListProps {

}

const CarList: FC<CarListProps> = () => {
  const dispatch = useAppDispatch();
  const cars = useAppSelector(state => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCars(1));
  }, []);

  return (
    <div className="items w-4/5">
      {cars.map(car => {
        return (
          <Car key={car.id} {...car} />
        );
      })}
    </div>
  );
};

export default CarList;