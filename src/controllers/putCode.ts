import { Request, Response } from "express";
import Code from "../models/code";

const putCode = async (req: Request, res: Response) => {
    const { id } = req.params
    const { code, language, theme } = req.body  

    await Code.findByIdAndUpdate(id, { code, language, theme }, { new: true })
        .then((data) => res.json(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                message: `id ${id} not found`,
            });
        })
}

export default putCode