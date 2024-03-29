// Function to add appropriate suffix to the date
const addDateSuffix = (date) => {
    let dateStr = date.toString();

    const lastChar = dateStr.charAt(dateStr.length - 1);

    if (lastChar === '1' && dateStr !== '11') {
        dateStr = `${dateStr}st`;
    } else if (lastChar === '2' && dateStr !== '12') {
        dateStr = `${dateStr}nd`;
    } else if (lastChar === '3' && dateStr !== '13') {
        dateStr = `${dateStr}rd`;
    } else {
        dateStr = `${dateStr}th`;
    }

    return dateStr;
};

// Exported function to format the timestamp
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    // Object to store month names
    const months = {
        0: monthLength === 'short' ? 'Jan' : 'January',
        1: monthLength === 'short' ? 'Feb' : 'February',
        2: monthLength === 'short' ? 'Mar' : 'March',
        3: monthLength === 'short' ? 'Apr' : 'April',
        4: monthLength === 'short' ? 'May' : 'May',
        5: monthLength === 'short' ? 'Jun' : 'June',
        6: monthLength === 'short' ? 'Jul' : 'July',
        7: monthLength === 'short' ? 'Aug' : 'August',
        8: monthLength === 'short' ? 'Sep' : 'September',
        9: monthLength === 'short' ? 'Oct' : 'October',
        10: monthLength === 'short' ? 'Nov' : 'November',
        11: monthLength === 'short' ? 'Dec' : 'December',
    };

    // Create a new Date object from the timestamp
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];

    // Get the day of the month with or without suffix
    const dayOfMonth = dateSuffix
        ? addDateSuffix(dateObj.getDate())
        : dateObj.getDate();

    // Get the year
    const year = dateObj.getFullYear();

    // Get the hour in 12-hour format
    let hour =
        dateObj.getHours() > 12
            ? Math.floor(dateObj.getHours() - 12)
            : dateObj.getHours();

    // Convert 0 hour to 12
    if (hour === 0) {
        hour = 12;
    }

    // Get the minutes with leading zero if less than 10
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

    // Get the period of the day (am or pm)
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

    // Format the timestamp string
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

    // Return the formatted timestamp
    return formattedTimeStamp;
};
