
import { competencia } from "../models/competencia.js";

export const getAllCompetencias=  async (req, res)=>{
    try {
        const allCompetencias= await competencia.findAll();
        res.json(allCompetencias)
        
    } catch (error) {
        console.log(error);
        
    }
    

}


export const createCompetencias=   async(req , res)=>{
    const {nombre_com} = req.body;
    
    
    try {
        
        const newCopetencias= await competencia.create({
            nombre_com

        })

        res.json({message: 'competencia creada'})
        
    } catch (error) {
        console.log(error)
        
    }

}


export const updateCompetencias= (req, res)=>{
    

    try {
        competencia.update(req.body, {
            where: {id_competencia: req.params.id }
        })
        res.json({message: 'competencia Actualizada'})
        
    } catch (error) {
        console.log(error)
    }    
}


export const deleteCompetencias= (req, res)=>{
    const {id}= req.params

    try {
        competencia.destroy({
            where: {id_competencia: id}
    
        })
        res.json({message: 'Eliminado'})
        
    } catch (error) {
        console.log(error)
    }
    
}