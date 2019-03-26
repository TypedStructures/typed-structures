export function flattenObject(obj: any, prefix = '') {
    return JSON.stringify(Object.keys(obj).reduce((acc: any, k: string) => {
        const pre: string = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
        else acc[pre + k] = obj[k];
        return acc;
    }, {}));
}