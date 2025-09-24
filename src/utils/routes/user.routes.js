import { Router } from "express";
import { registor } from "../../controllers/user.controler.js";
const router=Router();
router.route("/registor").post(registor);


export {router}
