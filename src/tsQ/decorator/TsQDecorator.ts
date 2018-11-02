export function TsQ(conf: object): any {
    return function (target: any) {
        target.prototype._tsq_conf = conf;
    };
}