import { numberify } from '../util/string';

export function groupBy(from: any, groupby: string) {
    return from
        .reduce((accumulator: any[], e: any) => {
        let group: number = numberify(e[groupby]);
        (accumulator[group] = accumulator[group] || []).push(e);
        return accumulator;
    }, []).filter((e: any) => e !== undefined);
}