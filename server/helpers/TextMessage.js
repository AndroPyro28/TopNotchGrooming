module.exports.sendTextMessageByStatus = (status) => {
    let textMsg = ""
    if(status == 1) {
        textMsg = "Your order is now being prepared"
    }

    if(status == 2) {
        textMsg = `Your order is done packing
         
Your order is now preparing to dispatch`
    }

    if(status == 3) {
        textMsg = `Your order has been dispatched
        
Your order is in shipping process
        `
    }

    if(status == 4) {
        textMsg = `Order is completed

Thank you for ordering our product!
        `
    }

    return textMsg
}