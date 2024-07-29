import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
    language: String,
    theme: String,
    code: String,
}, {
    timestamps: true,
    versionKey: false,
}
)

const Code = mongoose.model("Code", codeSchema);
export default Code