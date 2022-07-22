
module.exports.jsonParser = async (orderJson) => {
    const orders = orderJson?.map(order => {
        const productArr = order.products.split('*DIVIDER*');
        
        const parsedJsonProducts = productArr.map(product => {
            if(product.startsWith(',') ) {
                product = product.substring(1)
                return JSON.parse(product);
            }
            if (product != "") {
                return JSON.parse(product);
              }
        })
        parsedJsonProducts.pop()
        
        order.products = parsedJsonProducts;
        return order;
    })

    return orders
}