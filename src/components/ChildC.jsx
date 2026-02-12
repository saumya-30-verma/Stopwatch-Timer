import React, { useContext } from 'react'
import { themeContext } from '../App'

const ChildC = () => {
  
  const [theme, setTheme]= useContext(themeContext);

  function handleClick() {
    if (theme==='light')
      setTheme('dark');
    else
    setTheme('light')
  }
  return (
    <div>
       <button onClick={handleClick}>
        toggle theme
       </button>
    </div>
  )
}

export default ChildC