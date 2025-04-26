import { NativeSelect, Group } from '@mantine/core';

function Button({ levelFilter, setLevelFilter, skillFilter, setSkillFilter }) {
  const skillsList = [
    "Carbon", "Algorithms", "Backend", "Business Modeling", 
    "C", "C++", "Change Management", "Code review", "Cryptography",
    "DB & Data", "DevOps", "Functional programming", "Graphics",
    "Information Security", "Java", "Leadership", "Linux", "ML & AI",
    "Math", "Network & system administration", "OOP", "Parallel computing",
    "Python", "Requirements Analysis", "SQL", "Shell/Bash",
    "Software architecture", "Structured programming", "Systems Integration",
    "Team work", "Types and data structures", "Web"
  ];

  return (
    <Group gap="md" className="main_button">
      <NativeSelect 
        value={levelFilter}
        label="Уровень"
        data={['', 'Low', 'Medium', 'High']}
        onChange={(event) => setLevelFilter(event.currentTarget.value)}
      />
      <NativeSelect
        value={skillFilter || ''}
        label="Язык/Навык"
        placeholder="Все навыки"
        data={['', ...skillsList]}
        onChange={(event) => 
          setSkillFilter(event.currentTarget.value || null)
        }
      />
    </Group>
  );
}

export default Button;