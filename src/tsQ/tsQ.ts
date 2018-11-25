import {OrderClause} from './orderClause';
import {NoDecoratorException} from '../exceptions/no-decorator-exception';
import {Map, Stack} from '..';
import {NoSuchPropertyException} from '../exceptions/no-such-property-exception';

export class TsQ {

    private _select: string[];
    private _groupby: string;
    _from: any;
    private _where: any;
    private _orderby: Stack<OrderClause> = new Stack<OrderClause>();
    _key: string;

    public select(...select: string[]): TsQ {

        this._select = select.map((key: string) => {

            let values: any[] = this._from[this._key]();

            if (!this.propertyExistsIn(values, key))
                throw new NoSuchPropertyException(`The specified property "${key}" does not exist in the data provided collection`);

            return `_${key}`;
        });

        select = null;
        return this;
    }

    public static from(from: any): TsQ {
        let tsq: TsQ = new TsQ();
        tsq._from = from;
        try {
            tsq._key = from.prototype._tsq_conf;
        } catch (e) {
            throw new NoDecoratorException('TsQ decorator is missing from class ' + from.constructor.name);
        }
        return tsq;
    }

    public where(f: (e: any) => boolean): TsQ {
        this._where = f;
        return this;
    }

    public order_by(field: string, direction: string = 'asc'): TsQ {
        this._orderby.stack(new OrderClause(field, direction));
        return this;
    }

    public group_by(field: string): TsQ {
        this._groupby = field;
        return this;
    }

    public toArray(): any[] {
        this
            .fromProcess()
            .whereProcess()
            .orderByProcess()
            .selectProcess()
            .groupByProcess();

        return this._from;
    }

    /**
     * Gets the data from class based on decorator configuration.
     */
    private fromProcess() {
        this._from = this._from[this._key]();
        return this;
    }

    /**
     * Filters data according to the calback provided in "where" clause.
     */
    private whereProcess() {
        if (this._where)
            this._from = this._from.filter(this._where);
        return this;
    }

    /**
     * Orders data
     * TODO: Add comparaison callback handling, not everything is numbers
     */
    private orderByProcess() {

        while (!this._orderby.empty()) {
            let c: OrderClause = this._orderby.unstack();
            this._from = this._from.sort((a: any, b: any) => {

                let sort: any;

                if (typeof a[c.field] === 'number' || a[c.field] instanceof Date)
                    sort = c.direction.toLowerCase() === 'asc' ? a[c.field] - b[c.field] : b[c.field] - a[c.field];

                if (typeof a[c.field] === 'string')
                    sort = c.direction.toLowerCase() === 'asc' ? a[c.field].localeCompare(b[c.field]) : b[c.field].localeCompare(a[c.field]);

                if (typeof a[c.field] === 'object') {
                    let aPropertiesMap: Map<string, number | string>;
                    let bPropertiesMap: Map<string, number | string>;

                    aPropertiesMap = this.getObjectMap(a[c.field], '');
                    bPropertiesMap = this.getObjectMap(b[c.field], '');

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

        return this;
    }

    /**
     * Filters on provided fields list
     * TODO: Add function handling like SQL's SUM function
     */
    private selectProcess() {
        if (this._select) {
            this._from.forEach((e: any) => {
                Object.getOwnPropertyNames(e)
                    .filter(key => !this._select.includes(key))
                    .forEach((key: string) => Reflect.deleteProperty(e, key));
            });
            this._select = null;
        }

        return this;
    }

    /**
     * Groups data by provided groups list
     */
    private groupByProcess() {
        if (this._groupby)
            this._from = this._from.reduce((accumulator: any[], e: any) => {
                let group: number = this.numberify(e[this._groupby]);
                (accumulator[group] = accumulator[group] || []).push(e);
                return accumulator;
            }, []).filter((e: any) => e !== undefined);

        return this;
    }

    private getObjectMap(o: object, path: string) {

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

    private propertyExistsIn(values: any[], key: string) {
        return values.every(value => value[key] !== undefined);
    }

    private numberify(s: string): number {
        return Number(s.split('').map((char: string) => char.charCodeAt(0)).join(''));
    }
}