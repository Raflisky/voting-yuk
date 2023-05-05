import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { code } from "@/lib/code";

export default async function handle(req:NextApiRequest,res: NextApiResponse) {
    const session = await getSession({req})
    if(!session) {
        res.status(401).json({message: "Kamu harus login terlebih dahulu!!!"});
        return;
    }
    // create new
    if(req.method === "POST") {
        const result= await prisma.votes.create({
            data: {
                candidates: req.body.candidates,
                startDateTime: req.body.startDateTIme,
                endDateTime: req.body.endDateTime,
                title: req.body.title,
                publisher: req.body.publisher,
                code: code(6),
                deleteAt: null
            }
        })
        return res.json(result);
    }
    return res.status(400).json({data: "Metho not allowed"})
}