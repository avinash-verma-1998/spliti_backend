import { Request, Response } from 'express';
import { createUser_Supbase } from '../DAL/userCalls';
export const createUser = (req: Request, res: Response): void => {
   const user =  createUser_Supbase(req.body);
    res.json(user);
};