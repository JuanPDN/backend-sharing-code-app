"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const codeSchema = new mongoose_1.default.Schema({
    language: String,
    theme: String,
    code: String,
}, {
    timestamps: true,
    versionKey: false,
});
const Code = mongoose_1.default.model("Code", codeSchema);
exports.default = Code;
