import { Request, Response, } from 'express';


export const getClientes = (req: Request, res: Response) => {
    
    res.json({
        msg: "getClientes"
    })
}

export const getCliente = (req: Request, res: Response) => {
    
    const { id } = req.params

    res.json({
        msg: "getCliente",
        id: id
        
    })
}

export const deleteCliente = (req: Request, res: Response) => {
    
    const { id } = req.params

    res.json({
        msg: "deleteCliente",
        id: id
        
    })
}

export const postCliente = (req: Request, res: Response) => {
    
    const { body } = req;
    
    res.json({
        msg: "postCliente",
        body: body
        
    })
}

export const putCliente = (req: Request, res: Response) => {
    
    const { body } = req;
    const { id } = req.params;

    res.json({
        msg: "putCliente",
        body: body,
        id: id
        
    })
}