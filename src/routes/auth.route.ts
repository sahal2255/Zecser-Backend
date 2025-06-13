import { Request, Response, Router } from "express";
import jwt from 'jsonwebtoken'
const router=Router()
const SECRET='zecser';

router.get('/set-token',(req:Request,res:Response)=>{
    console.log('hitting auth reoute')
    const token=jwt.sign({id:'user123'},SECRET,{expiresIn:'7d'})
    res.cookie('token',token,{
        secure:false
    })
    res.json({message:'dummy token set into the cookie',token})
})

export default router