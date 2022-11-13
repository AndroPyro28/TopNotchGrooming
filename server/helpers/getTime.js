
const getTime = () => {
    const date = new Date();
    // const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    // const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    // const ampm = hours >= 12 ? 'pm' : 'am';
    // return `${hours % 12}:${minutes} ${ampm}`
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

module.exports = getTime