import Header from "./Header.jsx"
import Sidebar from "./Sidebar.jsx";
import Button from "./Button.jsx";
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
  /** Put your mantine theme override here */
});


function App() {
  return(
    <MantineProvider>
        <Header/>
        <Sidebar/>
        <Button/>
    </MantineProvider>

  );
}

export default App
