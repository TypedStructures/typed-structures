import { OrderClause } from './orderClause';

export class TsQ {

    private _select: string[];
    private _groupby: string;
    private _from: any;
    private _where: any;
    private  _orderby: OrderClause[] = [];
    private _orderDirection: string;

    public select(...select: string[]): TsQ {
        this._select = select;
        return this;
    }

    public static from(from: any): TsQ {
        let tsq: TsQ = new TsQ();
        tsq._from = from;
        return tsq;
    }

    public where(f: (e: any) => boolean): TsQ {
        this._where = f;
        return this;
    }

    public order_by(field: string, direction: string = 'asc'): TsQ {
        this._orderby.push(new OrderClause(field, direction));
        return this;
    }

    public group_by(field: string): TsQ {
        this._groupby = field;
        return this;
    }

    public toArray(): any[] {
        let r: any[] =  <any[]>this._from.toArray();

        if (this._where)
            r = r.filter(this._where);

        if (this._orderby.length)
            this._orderby.forEach((c: OrderClause) => {
                r = r.sort((a: any, b: any) => {
                    return c.direction.toLowerCase() === 'asc' ? a[c.field] - b[c.field] : b[c.field] - a[c.field];
                });
            });

        if (this._select) {
            r = r.map((e: any) => {
                return Object.getOwnPropertyNames(e)
                    .filter(key => this._select.includes(key))
                    .reduce((obj: any, key: any) => {
                        obj[key] = e[key];
                        return obj;
                    }, {});
            });
        }

        if (this._groupby)
            r = r.reduce((accumulator: any[], e: any) => {
                (accumulator[e[this._groupby]] = accumulator[e[this._groupby]] || []).push(e);
                return accumulator;
            }, []).filter((e: any) => e !== null);

        return r;
    }
}