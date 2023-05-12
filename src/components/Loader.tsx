import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <Bars
        height="30"
        width="30"
        color="#39cdcc"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
