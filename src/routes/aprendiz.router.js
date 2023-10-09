import { Router } from "express";
import {getAllApdz, createApdz, updateApdz, getApdz, deleteApdz} from "../controllers/aprendiz.controller.js"
const router= Router();


router.get('/', getAllApdz)
router.post('/', createApdz)
router.get('/:id', getApdz )
router.put('/:id', updateApdz)
router.delete('/:id', deleteApdz )





export default router;