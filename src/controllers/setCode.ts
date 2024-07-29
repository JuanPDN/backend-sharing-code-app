import { Request, Response } from "express";
import Code from "../models/code";

const setCode = async (req: Request, res: Response) => {
    const {code, language, theme} = req.body
    const newCode = new Code({
        code,
        language,
        theme
    })
    newCode.save().then((data) => res.json(data.id));
}

export default setCode