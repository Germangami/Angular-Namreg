export function currency(value: unknown, code: string, separator: string = ' ') {
    return `${value} ${separator} ${code}`;
}