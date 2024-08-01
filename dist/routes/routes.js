"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const setCode_1 = __importDefault(require("../controllers/setCode"));
const getCode_1 = __importDefault(require("../controllers/getCode"));
const putCode_1 = __importDefault(require("../controllers/putCode"));
const router = (0, express_1.Router)();
router.post("/code", setCode_1.default);
router.get("/code/:id", getCode_1.default);
router.put('/code/:id', putCode_1.default);
exports.default = router;
