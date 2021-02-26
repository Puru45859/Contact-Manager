import React from "react";
import { connect } from "react-redux";
import { buyCakes } from "../Redux/Cakes/cakeAction";

const CakeContainer = (props) => {
  return (
    <>
      <div>No.of cakes - {props.numberofCakes}</div>
      <button onClick={props.buyCakes}>Buy cakes</button>
    </>
  );
};
//when we access redux state in our component
const mapStateToProps = (state) => {
  return {
    numberofCakes: state.numberofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
