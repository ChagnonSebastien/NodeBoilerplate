import * as cors from 'cors';
import express from 'express';
import { SampleRoute } from './routes/SampleRoute';

const app = express();
const port = 3000;

let sampleRoute: SampleRoute = new SampleRoute();

let router: express.Router;
router = express.Router();

router.get('/', sampleRoute.get)

app.use(cors())
app.use('/api', router);

app.listen(port, () => console.log(`Server is listening on ${port}`));