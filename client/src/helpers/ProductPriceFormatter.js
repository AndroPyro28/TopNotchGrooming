const productPriceFormatter = (price) => {
    const PRICE_FORMATTER = Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "PHP",
    });

    return PRICE_FORMATTER.format(price);
  };

  export default productPriceFormatter;