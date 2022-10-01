module.exports.dateTimeFormatByText = (dateTimeLocal) => {
    const date = new Date(dateTimeLocal).toISOString().slice(0, 10);
    const time = new Date(dateTimeLocal).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

    return {date, time}
}