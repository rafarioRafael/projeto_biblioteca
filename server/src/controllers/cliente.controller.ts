import { Request, Response, } from 'express';


export const getClientes = (req: Request, res: Response) => {
    
    res.json({
        msg: "getClientes"
    })
}