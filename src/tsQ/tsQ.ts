import {OrderClause} from './orderClause';
import {NoDecoratorException} from '../exceptions/no-decorator-exception';
import {Map, Stack} from '..';

export class TsQ {

    private _select: string[];
    private _groupby: string;
    _from: any;
    private _where: any;
    private _orderby: Stack<OrderClause> = new Stack<OrderClause>();
    _conf: { type: any, key: string, getter: string, embedGetter: string };

    public select(...select: string[]): TsQ {
        this._select = select;
        return this;
    }

    public static from(from: any): TsQ {
        let tsq: TsQ = new TsQ();
        tsq._from = from;
        tsq._conf = from._tsq_conf;
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

        if (!this._conf)
            throw new NoDecoratorException('TsQ decorator is missing from class ' + this._from.constructor.name);

        let r: any[] = this.fromProcess();
        r = this.whereProcess(r);
        r = this.orderByProcess(r);
        r = this.selectProcess(r);
        return this.groupByProcess(r);
    }

    /**
     * Gets the data from class based on decorator configuration.
     */
    private fromProcess() {

        let r: any[];

        switch (this._conf.type) {
            case Array:
                if (this._conf.key)
                    r = <any[]>this._from[this._conf.key];

                if (this._conf.getter)
                    r = <any[]>eval(`this._from.${this._conf.getter}()`);
        }

        if (this._conf.embedGetter) {
            r = r.map((embed: any) => eval(`embed.${this._conf.embedGetter}`));
        }

        return r;
    }

    /**
     * Filters data according to the calback provided in "where" clause.
     * @param data
     */
    private whereProcess(data: any[]) {
        if (this._where)
            return data.filter(this._where);
        else
            return data;
    }

    /**
     * Orders data
     * TODO: Add comparaison callback handling, not everything is numbers
     * @param data
     */
    private orderByProcess(data: any[]) {
        if (this._orderby.length)
            while (!this._orderby.empty()) {
                let c: OrderClause = this._orderby.unstack();
                data = data.sort((a: any, b: any) => {

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

        return data;
    }

    /**
     * Filters on provided fields list
     * TODO: Add function handling like SQL's SUM function
     * @param data
     */
    private selectProcess(data: any[]) {
        if (this._select)
            return data.map((e: any) => {
                return Object.getOwnPropertyNames(e)
                    .filter(key => this._select.includes(key))
                    .reduce((obj: any, key: any) => {
                        obj[key] = e[key];
                        return obj;
                    }, {});
            });
        else
            return data;
    }

    /**
     * Groups data by provided groups list
     * @param data
     */
    private groupByProcess(data: any[]) {
        if (this._groupby)
            return data.reduce((accumulator: any[], e: any) => {
                (accumulator[e[this._groupby]] = accumulator[e[this._groupby]] || []).push(e);
                return accumulator;
            }, []).filter((e: any) => e !== null);
        else
            return data;
    }

    private getObjectMap(o: object, path: string) {

        let res: Map<string, number | string> = new Map<string, number | string>();

        Object.getOwnPropertyNames(o).forEach((property: string) => {
            if (typeof (<any>o)[property] === 'number' || typeof (<any>o)[property] === 'string' || (<any>o)[property] instanceof Date) {
                res.put(`${path}.${property}`, (<any>o)[property]);
            } else
                res = this.getObjectMap((<any>o)[property], path);
        });

        return res;
    }
}