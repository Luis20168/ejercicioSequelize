import app from "./app.js";
import { db } from "./database/database.js";
import routes from "./routes/sena.routes.js"

import "./models/curso.js"
import "./models/aprendiz.js"

app.set('port', 3000)






app.use('/apdz', routes);



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