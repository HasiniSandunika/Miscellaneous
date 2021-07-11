"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOwnerInput = void 0;
const create_owner_input_1 = require("./create-owner.input");
const graphql_1 = require("@nestjs/graphql");
let UpdateOwnerInput = class UpdateOwnerInput extends graphql_1.PartialType(create_owner_input_1.CreateOwnerInput) {
};
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateOwnerInput.prototype, "id", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateOwnerInput.prototype, "name", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateOwnerInput.prototype, "residence", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateOwnerInput.prototype, "contact", void 0);
__decorate([
    graphql_1.Field(),
    __metadata("design:type", String)
], UpdateOwnerInput.prototype, "gender", void 0);
UpdateOwnerInput = __decorate([
    graphql_1.InputType()
], UpdateOwnerInput);
exports.UpdateOwnerInput = UpdateOwnerInput;
//# sourceMappingURL=update-owner.input.js.map