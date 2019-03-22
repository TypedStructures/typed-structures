import { Map } from '../..';

export function propertyExistsIn(values: any[], key: string) {
    return values.every(value => value[key] !== undefined);
}

export function getObjectMap(o: object, path: string) {

    let res: Map<string, number | string> = new Map<string, number | string>();

    if (o) {
        let properties: string[] = Object.getOwnPropertyNames(o);

        for (let i = 0; i <= properties.length; i++) {
            let property: string = properties[i];
            if (typeof (<any>o)[property] === 'number' || typeof (<any>o)[property] === 'string' || (<any>o)[property] instanceof Date) {
                res.put(`${path}.${property}`, (<any>o)[property]);
            } else
                res.putAll(this.getObjectMap((<any>o)[property], path));
        }
    }

    return res;
}