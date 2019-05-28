import express from 'express';
import cors from 'cors';
import { SampleRoute } from './routes/SampleRoute';
import { json } from 'body-parser';

const app = express();
const port = 3000;

let sampleRoute: SampleRoute = new SampleRoute();

let router: express.Router;
router = express.Router();

router.get('/', sampleRoute.get)

app.use(cors());
app.use('/api', router);
app.use(json);

app.listen(port, () => console.log(`Server is listening on ${port}`));