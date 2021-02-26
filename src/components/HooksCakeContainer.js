import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../Redux/Cakes/cakeAction";

const HooksCakeContainer = () => {
  //   const numberofCakes = useSelector((state) => state.numberofCakes);
  //if we use multiusers
  const numberofCakes = useSelector((state) => state.cake.numberofCakes);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes - {numberofCakes} </h2>
      <button onClick={() => dispatch(buyCakes())}>Buy Cake </button>
    </div>
  );
};

export default HooksCakeContainer;
