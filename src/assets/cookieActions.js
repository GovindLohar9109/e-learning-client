export function removeUser() {
    document.cookie = `user=; expires=${new Date(0).toUTCString()}; path=/`;
}
export function removeToken() {
    document.cookie = `token=; expires=${new Date(0).toUTCString()}; path=/`;
}
export function getCookie(key) {
    const nameEQ = key + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            if (key == "user") return JSON.parse(cookie.substring(nameEQ.length));
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}
