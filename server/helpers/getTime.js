
const getTime = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    return `${hours % 12}:${minutes} ${ampm}`
}

module.exports = getTime