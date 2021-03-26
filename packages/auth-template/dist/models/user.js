"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Name is missing"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is missing"],
    },
    photoUrl: {
        type: String,
    },
});
var User = mongoose_1.default.model("User", userSchema);
exports.default = User;
