
function FormateDateLocal(date) {

    const newDate =  date.substring(0,date.indexOf(".") - 3).replace("T", " ");
    return newDate
}

export default FormateDateLocal