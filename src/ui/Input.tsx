import React, { FC } from "react";

interface InputProps {
  children?: React.ReactNode;
}

const Input: FC<InputProps> = ({ children }) => <input type="text"
                                                       className="w-72 p-1.5 border-2 border-gray-200 bg-gray-100 rounded-sm" />;

export default Input;