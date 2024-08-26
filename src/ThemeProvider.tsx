import { createContext, useContext, useState } from "react";
import { unknown, z } from "zod";

const themeSchema = z.literal("light").or(z.literal("dark"))

type Theme = z.infer<typeof themeSchema>

const themeContext = createContext({
    theme: "light" as Theme,
    setTheme: unknown as React.Dispatch<React.SetStateAction<Theme>>
})

export function ThemeProvider({children}:{children: React.ReactNode}) {
    const [theme, setTheme] = useState<Theme>(() => {
        const {success,data} = themeSchema.safeParse(localStorage.getItem("theme"))
        if (success && data) {
            return data;
        }
        localStorage.setItem("theme", "light")
        return "light"
    })
    return <themeContext.Provider value={{theme,setTheme}}>
        {children}
    </themeContext.Provider>
}

export const useTheme = () => useContext(themeContext)