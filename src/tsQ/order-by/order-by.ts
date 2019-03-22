import {OrderClause} from '../orderClause';
import { Stack, Map } from '../..';
import { getObjectMap } from '../util/reflect';

export function orderBy(from: any, orderby: Stack<OrderClause>) {

    while (!orderby.empty()) {
        let c: OrderClause = orderby.unstack();
        from = from.sort((a: any, b: any) => {

            let sort: any;

            if (typeof a[c.field] === 'number' || a[c.field] instanceof Date)
                sort = c.direction.toLowerCase() === 'asc' ? a[c.field] - b[c.field] : b[c.field] - a[c.field];

            if (typeof a[c.field] === 'string')
                sort = c.direction.toLowerCase() === 'asc' ? a[c.field].localeCompare(b[c.field]) : b[c.field].localeCompare(a[c.field]);

            if (typeof a[c.field] === 'object') {
                let aPropertiesMap: Map<string, number | string>;
                let bPropertiesMap: Map<string, number | string>;

                aPropertiesMap = getObjectMap(a[c.field], '');
                bPropertiesMap = getObjectMap(b[c.field], '');

                let aCount: number = 0;
                let bCount: number = 0;

                aPropertiesMap.keySet().toArray().forEach((key: string) => {
                    if (typeof aPropertiesMap.get(key) === 'number')
                        (<number>aPropertiesMap.get(key) - <number>bPropertiesMap.get(key)) > 0 ? bCount++ : aCount++;

                    if (typeof aPropertiesMap.get(key) === 'string')
                        sort = (<string>aPropertiesMap.get(key)).localeCompare(<string>bPropertiesMap.get(key)) > 0 ? bCount++ : aCount++;
                });

                sort = c.direction.toLowerCase() === 'asc' ? aCount > bCount ? 1 : -1 : aCount > bCount ? -1 : 1;
            }

            return sort;
        });
    }
    return from;
}