1. utwórz projekt next.js opierając go na js 
2. postępuj według tutorialu na stronie: https://ui.shadcn.com/docs/installation/manual
3. przy 4 kroku pamiętaj aby to było tak:
    "paths": {
      "@/*": ["./src/*"]
    }
4. przy 5 kroku zamień zawartość content na:
    content: ["./src/**/*.{js,jsx,ts,tsx}"], 
5. zamień ts w pliku lib/utils.js na js:
    import { clsx } from "clsx"
    import { twMerge } from "tailwind-merge"
 
    export function cn(...inputs) {
      return twMerge(clsx(inputs))
    }
6. dodaj w layout to, aby ci działała czcionka:
    import { Inter } from 'next/font/google'
    const inter = Inter({ subsets: ['latin'] })
    <body className={inter.className}>
7. npx shadcn lub npx shadcn add jeśli chcesz szybciej

i sigma
resztę konfigurujesz według własnych preferencji :)