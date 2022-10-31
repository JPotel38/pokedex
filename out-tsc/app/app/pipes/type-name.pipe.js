import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let TypeNamePipe = class TypeNamePipe {
    transform(type) {
        return type.split('-')[0];
    }
};
TypeNamePipe = __decorate([
    Pipe({
        name: 'typeName'
    })
], TypeNamePipe);
export { TypeNamePipe };
//# sourceMappingURL=type-name.pipe.js.map