import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const SECRET='zecser'
export const authenticate=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.cookies.token
    if(!token) {
        res.status(401).json({message:'Unautherized'})
        return
    }
    try {
        const decoded=jwt.verify(token,SECRET);
        (req as any).user=decoded
        console.log('authenticated');
        console.log('decoded',decoded)
        next()

    } catch (error) {
        res.status(401).json({message:'unautherizedsd'})
        return
    }
}