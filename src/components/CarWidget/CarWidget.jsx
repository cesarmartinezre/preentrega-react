import { useState } from "react";
import "./carwidget.css";
const CarWidget = () => {
  const [total, setTotal] = useState(5);
  return (
    <div className="carwid">
      <p>CART</p>
      <p>{total}</p>
    </div>
  );
};

export default CarWidget;
