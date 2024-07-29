import { Router } from "express";

import  setCode  from "../controllers/setCode";
import getCode from "../controllers/getCode";
import putCode from "../controllers/putCode";

const router = Router();

router.post("/code", setCode)
router.get("/code/:id", getCode)
router.put('/code/:id', putCode)

export default router;