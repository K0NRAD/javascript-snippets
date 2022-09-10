// Get cookie
// Usage: getCookie("cookie-name");
const getCookie = (name) =>
    ('; ' + document.cookie).split(`; ${name}=`).pop().split(';')[0]
