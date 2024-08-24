import { Poppins } from "next/font/google";

export const PoppinsRegular =  Poppins({
    subsets: ['latin'],
    display: 'auto',
    weight: "100"
})

export const PoppinsBold =  Poppins({
    subsets: ['latin'],
    display: 'auto',
    weight: "800"
})

export const PoppinsItalic =  Poppins({
    subsets: ['latin'],
    display: 'auto',
    weight: "800",
    style:'italic'
})