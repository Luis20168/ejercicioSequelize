import { Router } from "express";
import {getApdz, getallApdz, updateApdz, createApdz, deleteApdz } from "../controllers/sena.controllers.js"
const router= Router();

router.get('/', getallApdz)
router.post('/', createApdz)
// router.put('/user/:id', updateApdz)
router.delete('/:id', deleteApdz)
// router.get('/user/:id', getApdz)

export default router;
