
import {curso} from "../models/curso.js"


export const getallApdz = async (req, res)=>{
    try {
        
        const cursos=  await curso.findAll();
        res.json(cursos)
        
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }

}

export const createApdz = async (req, res)=>{
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

export const updateApdz =(req, res)=>{
    res.send('actualizando apdz')

}


export const deleteApdz = async (req, res)=>{
    const {id}= req.params

    console.log(id)
   try{
    await curso.destroy({
        where:({
            idCurso: id 
        })
    })
    res.sendStatus(204)
   }catch(error){
    return res.status(500).json({message: error.message})

   }

}

export const getApdz =(req, res)=>{
    res.send('obteniendo aprendices po id')

}