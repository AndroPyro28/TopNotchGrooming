function storeLogic({ setActiveFilter }) {
  const setProps = (e) => {
    setActiveFilter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const shuffleArray = (productsArr) => {
    let currentIndex = 0;
    let newProductsArr = [];
    while (currentIndex < productsArr.length) {
      const rndInt = Math.floor(Math.random() * productsArr.length) + 0;
      if (
        !newProductsArr.some(
          (product) => productsArr[rndInt]?.id == product?.id
        )
      ) {
        newProductsArr[currentIndex++] = productsArr[rndInt];
      }
    }
    return newProductsArr;
  };

  const dropDownItemCategory = [
    { key: "Select Category", value: "" },
    { key: "Food", value: "Food" },
    { key: "Toy", value: "Toy" },
    { key: "Hygiene", value: "Hygiene" },
    { key: "Utility", value: "Utility" },
  ];

  const dropDownAgeGap = [
    {
      key: "Select age limit",
      value: "",
    },
    {
      key: "1-2 (yrs old)",
      value: "1-2",
    },
    {
      key: "2-4 (yrs old)",
      value: "2-4",
    },
    {
      key: "5-7 (yrs old)",
      value: "5-7",
    },
    {
      key: "Above 7+ (yrs old)",
      value: "7+",
    },
  ];

  return {
    setProps,
    shuffleArray,
    dropDownItemCategory,
    dropDownAgeGap,
  };
}

export default storeLogic;
