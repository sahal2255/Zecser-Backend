import jwt from "jsonwebtoken"
const SECRET='zecser'

const dummyId={
    id:'user123'
}

const token=jwt.sign(dummyId,SECRET,{expiresIn:'7d'})

console.log('dummy token',token)