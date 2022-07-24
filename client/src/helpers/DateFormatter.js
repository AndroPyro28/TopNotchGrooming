const DateFormmater = (dateParams) => {
    const date = new Date(dateParams).toISOString().slice(0, 10);
    return date
}

export default DateFormmater