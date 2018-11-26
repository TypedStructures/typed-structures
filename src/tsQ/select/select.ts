import {NoSuchPropertyException} from '../../exceptions/no-such-property-exception';
import {propertyExistsIn} from '../util/reflect';

export function select(selectList: string[], from: any, method: string): string[] {
    return selectList.map((key: any) => {

        let values: any[] = from[method]();

        if (!propertyExistsIn(values, key))
            throw new NoSuchPropertyException(`The specified property "${key}" does not exist in the data provided collection`);

        return `_${key}`;
    });
}

export function selectFilter(from: any, select: any[]) {
    from.forEach((e: any) => {
        Object.getOwnPropertyNames(e)
            .filter(key => !select.includes(key))
            .forEach((key: string) => Reflect.deleteProperty(e, key));
    });
    return from;
}