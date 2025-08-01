"use client"

import { useTestStore } from "@/zustand/store"

// import { useTestStore } from "../../../zustand/store.js"

import FirstProduct from "@/components/store/shop/FirstProduct"





export default function StorePage(){
     const {count} = useTestStore()
    return (
        <>
         <div>{count}</div>
         <FirstProduct/>
         </>
    )
}