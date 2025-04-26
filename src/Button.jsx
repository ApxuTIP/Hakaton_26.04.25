import { NativeSelect, Group } from "@mantine/core";

function Button({ levelFilter, setLevelFilter, skillFilter, setSkillFilter }) {
    const skillsList = [
        "C",
        "Linux",
        "Network & system administration",
        "Algorithms",
        "C++",
        "OOP",
        "DB & Data",
        "Python",
        "Java",
        "JavaScript",
        "HTML/CSS",
        "TypeScript",
        "Angular",
        "React",
        "Node.js",
        "SQL",
        "NoSQL",
        "DevOps",
        "AWS",
        "Docker",
        "Kubernetes",
        "Machine Learning",
        "TensorFlow"
      ];

  return (
    <Group gap="md" className="main_button">
      <NativeSelect
        value={levelFilter}
        label="Уровень"
        data={["", "Low", "Medium", "High"]}
        onChange={(event) => setLevelFilter(event.currentTarget.value)}
      />
      <NativeSelect
        value={skillFilter || ""}
        label="Язык/Навык"
        placeholder="Все навыки"
        data={["", ...skillsList]}
        onChange={(event) => setSkillFilter(event.currentTarget.value || null)}
      />
    </Group>
  );
}

export default Button;
