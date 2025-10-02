import { useState } from 'react'
import './App.css'

import AppRoutes from './routes/AppRoutes'
import ButtonAppBar from './components/MUINavBar'
import AboutPage from './pages/AboutPage'
import ThemeToggleButton from './components/ThemeToggleButton'
import {UserProvider} from './context/UserContext'







function App() {
  const [count, setCount] = useState(0)













return (
  //<CustomCard/>
   //<BasicGrid/>
   //<MUIForm/>
   //<MUIDialog text={'My first MUI Dialog'}/>
//<ThemeProvider theme={tealTheme}>
//<CustomCard/>
//<BasicGrid/>

    // <MyThemeProvider>
      <UserProvider>
        <ButtonAppBar/>

      
        
<AppRoutes/>
        </UserProvider>
    // </MyThemeProvider>





);
}




export default App;