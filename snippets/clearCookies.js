// Clear all cookies
// Usage: clearCookies();
const clearCookies = () =>
    document.cookie
        .split(';')
        .forEach((c) =>
        (document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, '=;expires=Thu, 01 Jan 1970 00:00:00 UTC')),
        )
