const GetDateToday = () => {
    return new Date().toISOString().slice(0, 10);
}



export default GetDateToday