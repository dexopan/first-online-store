import { Router } from "express";
import userRouter from "./userRouter.js";
import typeRouter from "./typeRouter.js";
import brandRouter from "./brandRouter.js";
import deviceRouter from "./deviceRouter.js";
import basketRouter from "./basketDeviceRouter.js";


const router = new Router()

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)
router.use('/basket', basketRouter)



export default router