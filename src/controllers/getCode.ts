import { Request, Response } from "express"
import Code from "../models/code";

const getCode = async (req: Request, res: Response) => {
    const { id } = req.params

    await Code.findById(id)
        .then((data) => res.json(data))
        .catch((err) => {
            console.log(err);
            res.status(500).send(
                `id ${id} not found`
            );
        });

}

export default getCode