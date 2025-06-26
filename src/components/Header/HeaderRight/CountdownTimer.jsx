import React from "react";
const CountdownTimer = () => {
  const timeUnits = ["6 Days", "5 Hours", "4 Mins", "37 Secs"];
  return (
    <div>
      <p className="text-sm text-gray-300 font-medium">Presale Ends In:</p>
      <div className="flex justify-between text-center mt-2 gap-2">
        {timeUnits.map((item, index) => (
          <div key={index} className="flex-1 bg-[#2a183d] py-2 rounded-lg">
            <div className="text-2xl font-bold">{item.split(" ")[0]}</div>
            <div className="text-xs uppercase text-gray-400">{item.split(" ")[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
