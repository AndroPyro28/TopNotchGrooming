
module.exports.orderProductParserList = async (orderJson) => {
    const orders = orderJson?.map(order => {
        const productArr = order?.products.split('*DIVIDER*');
        
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


module.exports.orderProductParserOne = async (order) => {
    console.log(order.products);
    
        const productArr = order.products.split('X');

        const parsedJsonProducts = productArr.map(product => {

            // if(product.startsWith(',') ) {
            //     product = product.substring(1)
            //     const productParsed = JSON.parse(product);
            //     // console.log(productParsed);
            // }
            // if (product != "") {
            //     const productParsed = JSON.parse(product);
            //     // console.log(productParsed);
            //   }

        })
        parsedJsonProducts.pop()
        
        order.products = parsedJsonProducts;
        return order;
    

}