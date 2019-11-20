import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Loading = props => {
  return (
    <Loader
      type="Plane"
      color="Blue"
      height={20}
      width={20}
    />
  );
};

export default Loading;