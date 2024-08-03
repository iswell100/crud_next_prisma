import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { JenisRegu } from "@prisma/client";
const prisma = new PrismaClient();

export const PATCH = async (request: Request, {params}: {params: {id: string}}) =>{
    const body: JenisRegu = await request.json();
    const jenisregu = await prisma.jenisRegu.update({
        where:{
            id: Number(params.id)
        },
        data:{
            name: body.name,
        }
    });
    return NextResponse.json(jenisregu, {status: 200});
}