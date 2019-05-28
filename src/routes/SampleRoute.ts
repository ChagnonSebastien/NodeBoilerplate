import { Request, Response, NextFunction } from "express";

export class SampleRoute {

    public async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.send('Hello World!');
    }
    
}