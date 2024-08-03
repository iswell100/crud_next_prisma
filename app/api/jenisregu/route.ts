import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { JenisRegu } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) =>{
    const body: JenisRegu = await request.json();
    const jenisregu = await prisma.jenisRegu.create({
        data:{
            name: body.name,
        }
    });
    return NextResponse.json(jenisregu, {status: 201});
}