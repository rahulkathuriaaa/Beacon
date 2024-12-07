"use client";

import Home from "@/components/Home";
import React, {useEffect, useState} from "react";

import * as yup from "yup";

declare global {
    interface Window {
        ethereum?: any;
        starkey?: any;
    }
}




export default function SupraDAppPage() {

    return (
        <main className="py-24 text-center">
            <Home/>
           
        </main>
    );
}
