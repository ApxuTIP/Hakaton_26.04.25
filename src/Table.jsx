import { Table } from "@mantine/core";

const elements = [
  { "User name": "adeliari", "Skill name": "C", "Skill points": 13 },
  { "User name": "adeliari", "Skill name": "Linux", "Skill points": 12 },
  { "User name": "aethanma", "Skill name": "C", "Skill points": 800 },
  { "User name": "aethanma", "Skill name": "Python", "Skill points": 950 },
  { "User name": "alaniubl", "Skill name": "C++", "Skill points": 1000 },
  { "User name": "alaniubl", "Skill name": "OOP", "Skill points": 1100 },
  { "User name": "alexisaz", "Skill name": "Machine Learning", "Skill points": 1600 },
  { "User name": "alexisaz", "Skill name": "TensorFlow", "Skill points": 1550 },
  { "User name": "allanant", "Skill name": "JavaScript", "Skill points": 400 },
  { "User name": "allanant", "Skill name": "HTML/CSS", "Skill points": 200 },
  { "User name": "amberlyp", "Skill name": "DevOps", "Skill points": 1700 },
  { "User name": "amberlyp", "Skill name": "AWS", "Skill points": 1400 },
  { "User name": "angelecl", "Skill name": "React", "Skill points": 1000 },
  { "User name": "angelecl", "Skill name": "Node.js", "Skill points": 950 },
  { "User name": "annabech", "Skill name": "TypeScript", "Skill points": 600 },
  { "User name": "annabech", "Skill name": "Angular", "Skill points": 500 },
  { "User name": "aragornc", "Skill name": "Kubernetes", "Skill points": 1800 },
  { "User name": "aragornc", "Skill name": "Docker", "Skill points": 1600 },
  { "User name": "ardeliac", "Skill name": "SQL", "Skill points": 1200 },
  { "User name": "ardeliac", "Skill name": "NoSQL", "Skill points": 800 }
];

const getLevel = (points) => {
  if (points < 900) return "Low";
  if (points < 1500) return "Medium";
  return "High";
};

function Demo({ levelFilter, skillFilter }) {
  const filteredData = elements.filter((element) => {
    if (skillFilter && element["Skill name"] !== skillFilter) {
      return false;
    }
    
    const currentLevel = getLevel(element["Skill points"]);
    return !levelFilter || currentLevel === levelFilter;
  });

  const rows = filteredData.map((element) => {
    const level = getLevel(element["Skill points"]);
    return (
      <Table.Tr key={`${element["User name"]}-${element["Skill name"]}`}>
        <Table.Td>{element["User name"]}</Table.Td>
        <Table.Td>{element["Skill name"]}</Table.Td>
        <Table.Td>{element["Skill points"]}</Table.Td>
        <Table.Td style={{
          color: level === "High" ? "#2ecc71" :
                level === "Medium" ? "#f39c12" : "#95a5a6",
          fontWeight: 600
        }}>
          {level}
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>User name</Table.Th>
          <Table.Th>Skill name</Table.Th>
          <Table.Th>Skill points</Table.Th>
          <Table.Th>Level</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default Demo;