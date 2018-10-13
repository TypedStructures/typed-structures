import { OrderClause } from './orderClause';

export class TsQ {

    private _select: string[];
    private _groupby: string;
    set select(value: string[]) {
        this._select = value;
    }
    private _from: any;
    private _where: any;
    private  _orderby: OrderClause[] = [];
    private _orderDirection: string;

    public static select(...select: string[]): TsQ {
        let tsq: TsQ = new TsQ();
        tsq.select = select;
        return tsq;
    }

    public from(from: any): TsQ {
        this._from = from;
        return this;
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

        if (this._groupby)
            r = r.reduce((accumulator: any[], e: any) => {
                (accumulator[e[this._groupby]] = accumulator[e[this._groupby]] || []).push(e);
                return accumulator;
            }, []).filter((e: any) => e !== null);

        return r;
    }
}