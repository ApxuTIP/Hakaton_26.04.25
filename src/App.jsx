import { useState } from "react";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Button from "./Button.jsx";
import Demo from "./Table.jsx";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

function App() {
  const [levelFilter, setLevelFilter] = useState('Low');
  const [skillFilter, setSkillFilter] = useState(null); // Добавляем состояние для навыков

  return (
    <MantineProvider theme={theme}>
      <Header />
      <Sidebar />
      <Button 
        levelFilter={levelFilter} 
        setLevelFilter={setLevelFilter}
        skillFilter={skillFilter}
        setSkillFilter={setSkillFilter}
      />
      <Demo 
        levelFilter={levelFilter} 
        skillFilter={skillFilter} // Передаем фильтр навыков
      />
    </MantineProvider>
  );
}

export default App;