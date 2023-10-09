import {Router} from "express";
import {getAllCompetencias, createCompetencias , updateCompetencias , deleteCompetencias} from "../controllers/competencia.controllers.js";
const router= Router();

router.get('/', getAllCompetencias )
router.delete('/:id', deleteCompetencias )
router.post('/', createCompetencias )
router.put('/:id', updateCompetencias )


export default router;