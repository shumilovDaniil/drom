import React, { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => <h1 className="mb-5 text-2xl">{children}</h1>;

export default Title;