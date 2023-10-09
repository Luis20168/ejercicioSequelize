import { Router } from "express";
import {getCurso, getallCursos, updateCursos, createCursos, deleteCursos } from "../controllers/curso.controllers.js"
const router= Router();

router.get('/', getallCursos)
router.post('/', createCursos)
// router.put('/user/:id', updateApdz)
router.delete('/:id', deleteCursos)
router.get('/:id', getCurso)

export default router;
