export function TsQ(): any {
    return function (target: any, propertyKey: string) {
        target.prototype = {_tsq_conf: propertyKey};
    };
}