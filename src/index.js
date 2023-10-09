import app from "./app.js";
import { db } from "./database/database.js";

import routesCurso from "./routes/curso.routes.js"
import routesAprendiz from "./routes/aprendiz.router.js"
import routesCompetencias from "./routes/competencia.routes.js"

import "./models/curso.js"
import "./models/aprendiz.js"
import "./models/competencia.js"

app.set('port', 3000)





app.use('/apdz', routesAprendiz)
app.use('/cursos', routesCurso);
app.use('/competencia', routesCompetencias);



app.listen(app.get('port'), ()=>{
    console.log('server on port ', app.get('port'))
})





try {
    await db.authenticate();
    await db.sync({force: false});
    console.log('db conected')
} catch (error) {
    console.log(error);
    
}