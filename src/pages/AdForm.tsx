import React from "react";
import Title from "../ui/Title";
import Input from "../ui/Input";

const AdForm = () => {

  return (
    <div>
      <Title>Подать объявление о продаже автомобиля</Title>
      <form action="" className="flex gap-3 flex-col">
        <div className="flex gap-2 items-center">
          <span>VIN или номер кузова</span>
          <Input />
        </div>
        <div className="flex gap-2 items-center">
          <span>Номер СТС</span>
          <Input />
        </div>
        <div className="flex gap-2 items-center">
          <span>Госномер</span>
          <Input />
        </div>
        <div className="flex gap-2 items-center">
          <span>Марка</span>
          <select className="w-72 p-1.5 border-2 border-gray-100 bg-gray-100 rounded-sm" name="select">
            <option value="value1">ГАЗ</option>
            <option value="value2" selected>Москвич</option>
            <option value="value3">УАЗ</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <span>Модель</span>
          <select className="w-72 p-1.5 border-2 border-gray-100 bg-gray-100 rounded-sm" name="select">
            <option value="value1">3111 Волга</option>
            <option value="value2" selected>М-72</option>
            <option value="value3">Победа</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <span>Руль</span>
          <div className="flex">
            <button className="p-1 border-2 border-gray-200 rounded-xl px-10">Левый</button>
            <button className="p-1 bg-black text-white rounded-xl px-10">Правый</button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <span>Описание</span>
          <textarea className="border-2 border-gray-100 bg-gray-100 rounded-sm" name="" id=""></textarea>
        </div>
        <div className="flex gap-2 items-center">
          <span>Цена</span>
          <Input />
        </div>

        <div className="flex gap-2 items-center">
          <span>Город продажи</span>
          <Input />
        </div>
        <div className="flex gap-2 items-center">
          <span>Телефон 1</span>
          <input type="tel" />
        </div>
        <div className="flex gap-2 items-center">
          <input className="allow_checkbox" type="checkbox" />
          <label htmlFor="allow_checkbox">Разрешить покупателям задавать мне вопросы</label>
        </div>
        <button className="p-3 rounded-sm bg-red-600 text-white">Подать объявление и добавить фото</button>
      </form>
    </div>
  );
};

export default AdForm;