import useModel from '../models/user.model.js';
import * as userService from '../services/user.service.js';
import {validationResult} from 'express-validator';

export const createUserController=async(req,res)=>{
const errors=validateresult(req)

if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
}
try{
    const user=await userService.createUser(req.body)
    const token=await user.generateJWT()
    res.status(201).json({user,token})
}catch(error){
    res.status(400).json({error:error.message})
}
}