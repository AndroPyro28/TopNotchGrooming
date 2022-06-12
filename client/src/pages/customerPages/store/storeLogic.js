import React from "react";

function storeLogic({setActiveFilter}) {
  const setProps = (e) => {
      
    setActiveFilter(prev => ({...prev, [e.target.name]: e.target.value}));
  };

  return {
    setProps,
  };
}

export default storeLogic;
