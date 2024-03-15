import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient(); 

export async function Post(request){
    const {email , password } = await request.json();
    const user = await prisma.user.create({
        data:{
            email , 
            password 
        },
    });
    return NextResponse.json({message : "add successfully", user})
}