import { createContext } from 'react'
import { useState } from 'react'

const ThemeContext= createContext()

const ThemeProvider=( {children} )=>{

    const [theme,setTheme]=useState('light')

    const handleTheme=()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    
    return(

        <ThemeContext.Provider value={{theme,handleTheme}}>
                {children}
        </ThemeContext.Provider>

        
    )
}

export {
    ThemeContext,
    ThemeProvider
}
