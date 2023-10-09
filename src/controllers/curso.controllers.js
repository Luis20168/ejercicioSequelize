
import {curso} from "../models/curso.js"


export const getallCursos = async (req, res)=>{
    try {
        
        const cursos=  await curso.findAll();
        res.json(cursos)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }

}

export const createCursos = async (req, res)=>{
    const {idCurso, nombreCurso}= req.body
    try{
        const newCurso= await curso.create({
            idCurso,
            nombreCurso
        })
    
        console.log(newCurso)
        res.send('creado')
    }catch(error){
        return res.status(500).json({message: error.message})
    }

}

export const updateCursos = async (req, res)=>{
    try {
        await curso.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            message: "¡Registro actualizado correctamente!"
        });
    } catch (error) {
        res.json({ message: error.message });
    }

}


export const deleteCursos = async (req, res)=>{
    const {id}= req.params
    console.log(id)

   try{
    await curso.destroy({
        where:({
            idCurso: id
        })
    })
    res.json({message: "Curso eliminado"})
   }catch(error){
    return res.status(500).json({message: error.message})

   }

}

export const getCurso = async (req, res)=>{
    try {
        const apdz = await curso.findAll({
            where: {idCurso: req.params.id}
        })
        res.json(apdz)


    }catch (error) {
        console.log(error)
    }
    

}