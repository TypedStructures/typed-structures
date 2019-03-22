import {OrderClause} from './orderClause';
import {NoDecoratorException} from '../exceptions/no-decorator-exception';
import {Stack} from '..';
import {select, selectFilter} from './select/select';
import {orderBy} from './order-by/order-by';
import {groupBy} from './group-by/group-by';

export class TsQ {

    private _from: any;
    private _method: string;
    private _select: string[];
    private _groupby: string;
    private _where: any;
    private readonly _orderby: Stack<OrderClause>;
    private _computed: any;

    constructor() {
        this._orderby = new Stack<OrderClause>();
    }

    public select(...fields: any[]): TsQ {
        this._select = select(fields, this._from, this._method);
        return this;
    }

    public static from(from: any): TsQ {
        let tsq: TsQ = new TsQ();
        tsq._from = from;
        try {
            tsq._method = from.prototype._tsq_conf;
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

    public fetch(): any[] {
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
        this._from = this._from[this._method]();
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
     */
    private orderByProcess() {
        this._from = orderBy(this._from, this._orderby);
        return this;
    }

    /**
     * Filters on provided fields list
     */
    private selectProcess() {
        if (this._select) {
            this._from = selectFilter(this._from, this._select);
            this._select = null;
        }

        return this;
    }

    /**
     * Groups data by provided groups list
     */
    private groupByProcess() {
        if (this._groupby)
            this._from = groupBy(this._from, this._groupby);

        return this;
    }
}