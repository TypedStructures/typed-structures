export function numberify(s: string): number {
    return Number(s.split('').map((char: string) => char.charCodeAt(0)).join(''));
}