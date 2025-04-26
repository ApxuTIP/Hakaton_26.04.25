import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon', level: 'Low' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen', level: 'Medium' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium', level: 'Low' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium', level: 'High' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium', level: 'Low' },
];

function Demo({ levelFilter, skillFilter }) {
  const filteredData = elements.filter(element => {
    const levelMatch = !levelFilter || element.level === levelFilter;
    const skillMatch = !skillFilter || 
      element.name.toLowerCase().includes(skillFilter.toLowerCase());
    return levelMatch && skillMatch;
  });

  const rows = filteredData.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Atomic number</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}

export default Demo;