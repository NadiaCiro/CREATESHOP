/*Tiene todas las configuraciones de express y llama a las rutas */
import express from 'express'
import usersRoutes from './routes/users.routes.js';
import indexRoutes from "./routes/index.routes.js"
import productsRoutes from "./routes/products.routes.js";
import searchRoutes from "./routes/search.routes.js";
import cors from "cors";
import featuredProductsRoutes from './routes/featured.routes.js';

const app = express()


var corsOptions = {
    origin: 'https://createshop.vercel.app',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors())/*Api consumible, comunicar al front */

app.use(express.json(corsOptions))/*Primero se recibe los datos se convierten a json o un objeto js y luego se pasa a las rutas */


/*Rutas */
app.use(indexRoutes)
app.use('/api',usersRoutes)
app.use('/api', productsRoutes)
app.use('/api', featuredProductsRoutes)
app.use('/api', searchRoutes)

/*Not found Route */
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
}) 

export default app;