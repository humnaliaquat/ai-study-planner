import {Request, Response} from "express"
import OpenAI from "openai"
const openai = new OpenAI({
  apiKey: process.env.API_KEY ,
});
export async function POST(req:Request){
  const {message} = await req.;

}