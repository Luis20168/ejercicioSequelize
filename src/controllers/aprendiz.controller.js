import { aprendiz} from "../models/aprendiz.js";
import  curso  from "../models/aprendiz.js";
export const getAllApdz=  async (req, res)=>{

    try {
        const aprendices = await aprendiz.findAll({
            include: {
                model: curso 
            }
        });
        res.json(aprendices);
    } catch (error) {
        console.error(error);
    }
    
}

export const createApdz=  async (req, res)=>{
    const {idAprendiz, nombreAprendiz ,emailAprendiz, passwordAprendiz,curso_idCurso } = req.body;
    
    try {
        const newAprendiz=  await aprendiz.create({
            idAprendiz,
            nombreAprendiz,
            emailAprendiz,
            passwordAprendiz,
            curso_idCurso
    
        });
        console.log(newAprendiz)
        res.send('Aprendiz creado')
        
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }


}

export const updateApdz= (req, res)=>{
    const { idAprendiz,nombreAprendiz, passwordAprendiz, emailAprendiz,curso_idCurso}=  req.body;
    try {
        aprendiz.update(req.body, {
            where:{idAprendiz: req.params.id}
        })
    
        res.json({
            message: 'Aprendiz Acualizado'
        })
    
        
    } catch (error) {
        return res.status(500).json({message: error.message});
        
    }
}

export const getApdz = async (req, res)=>{
    try {
        const apdz = await aprendiz.findAll({
            where: {idAprendiz: req.params.id}
        })
        res.json(apdz)


    }catch (error) {
        console.log(error)
    }
    

}


export const deleteApdz = async (req, res)=>{
    const {id}= req.params
    

   try{
    await aprendiz.destroy({
        where:({
            idAprendiz: id
        })
    })
    res.json({message: "Aprendiz eliminado"})
   }catch(error){
    return res.status(500).json({message: error.message})

   }

}
