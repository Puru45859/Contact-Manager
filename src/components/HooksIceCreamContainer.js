import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { buyIceCream } from "../Redux/IceCream/iceCream";
import { buyIceCream } from "../Redux/IceCream/iceCream";

const HooksIceCreamContainer = () => {
  //   const numberoficeCream = useSelector((state) => state.numberoficeCream);
  //if we use multiusers

  const numberoficeCream = useSelector(
    (state) => state.iceCream.numberoficeCream
  );

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of IceCream - {numberoficeCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream </button>
    </div>
  );
};

export default HooksIceCreamContainer;
