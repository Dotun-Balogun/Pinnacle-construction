import React from "react";

type FaintTextProps = {
  backgroundText: string;
  mainText: string;
};
const FaintText = ({ backgroundText, mainText }: FaintTextProps) => {
  return (
    <div className="hidden h-45 lg:flex  items-center justify-center relative z-0 ">
      <div
        className="absolute 
      z- flex items-center justify-center"
      >
        <h1 className="text-[200px] font-bold text-primary/8">
          {backgroundText}
        </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-primary font-mono text-[18px] lg:text-2xl text-center md:text-left">
          {mainText}
        </h1>
      </div>
    </div>
  );
};

export default FaintText;
