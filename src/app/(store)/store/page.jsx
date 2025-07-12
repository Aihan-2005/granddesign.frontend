"use client"

import { useTestStore } from "@/zustand/store"

// import { useTestStore } from "../../../zustand/store.js"





export default function StorePage(){
     const {count} = useTestStore()
    return (
        <>
         <div>{count}</div>
         </>
    )
}