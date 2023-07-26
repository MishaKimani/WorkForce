import Nav from './components/Nav'
import Search from './components/JobData'
import { useContext } from 'react'
import { ThemeContext } from './Context/JobContext'

import Switch from '@mui/material/Switch';

function App() {
  
  const { theme, handleTheme }=useContext(ThemeContext)

  const backgroundColor= {
    backgroundColor: theme === 'light' ? 'white' : 'black' ,
    color: theme=== 'light' ? 'black' : 'white'
    
  }
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    
    <main className='body' style={ backgroundColor} >

      <Nav/>

      <div className='switch'>

        Change Theme

        <Switch onClick={handleTheme} {...label} />
        
      </div>

      <Search/>

      
      </main>

      
  )
}

export default App
