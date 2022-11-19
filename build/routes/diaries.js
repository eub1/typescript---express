"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryServices = __importStar(require("../services/diaryServices"));
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(diaryServices.getEntrieswithoutSensitiveInfo());
});
//* v.1
// router.post('/', (req, res) => {
//   const { date, weather, visibility, comment } = req.body
//   const newDiaryEntry = diaryServices.addEntry(date, weather, visibility, comment)
//   res.json(newDiaryEntry)
// })
//* v.2
// router.post('/', (req, res) => {
//   const { date, weather, visibility, comment } = req.body
//   const newDiaryEntry = diaryServices.addEntry({ date, weather, visibility, comment })
//   res.json(newDiaryEntry)
// })
//* v.3 con validaciones
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = diaryServices.addEntry({ newDiaryEntry });
        res.json(addedDiaryEntry);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id); // + unary operator, to convert string to number. lo que viene por req.params siempre es str
    // res.send(diary?.weather)
    return diary !== undefined
        ? res.send(diary)
        : res.sendStatus(404);
});
exports.default = router;
