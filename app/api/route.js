import { NextResponse } from "next/server"


const names = [
    {
        "name": "chris",
        "age": 26
    },
    {
        "name": "paul",
        "age": 27
    },
    {
        "name": "michael",
        "age": 28
    }

]
export async function GET(){
    return NextResponse.json(names)
}