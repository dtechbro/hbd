import { Poppins } from "next/font/google";

export const poppins = Poppins({ weight: '400', subsets: ['latin'] });


import { Acme } from 'next/font/google';

export const acme = Acme({
  subsets: ['latin'],
  weight: '400', // Acme only has 400 weight
  display: 'swap', // Optional for performance
});