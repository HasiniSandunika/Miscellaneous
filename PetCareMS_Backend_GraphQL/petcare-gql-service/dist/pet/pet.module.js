"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetModule = void 0;
const common_1 = require("@nestjs/common");
const pet_service_1 = require("./pet.service");
const pet_resolver_1 = require("./pet.resolver");
const typeorm_1 = require("@nestjs/typeorm");
const pet_entity_1 = require("./entries/pet.entity");
const owner_module_1 = require("../owner/owner.module");
let PetModule = class PetModule {
};
PetModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([pet_entity_1.Pet]), owner_module_1.OwnerModule],
        providers: [pet_service_1.PetService, pet_resolver_1.PetResolver]
    })
], PetModule);
exports.PetModule = PetModule;
//# sourceMappingURL=pet.module.js.map