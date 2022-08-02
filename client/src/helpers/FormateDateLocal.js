
function FormateDateLocal(date) {
    return date.substring(0,date.indexOf(".")).replace("T", " ") - 2;
}

export default FormateDateLocal