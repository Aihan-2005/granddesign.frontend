"use client"

import { useTestStore } from "@/zustand/store";
// import { useTestStore } from "../../zustand/store";
import HomePage from "./home/page";

export default function Page(){
    const {count} = useTestStore()
    return (
        <>
        <div>{count}</div>
         <div><HomePage/></div>
         </>
    )
}