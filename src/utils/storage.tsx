export const save = (key: string, value: string) => {
    return localStorage.setItem(key, value);
}

export const retrieve = (key: string) => {
    return localStorage.getItem(key);
}