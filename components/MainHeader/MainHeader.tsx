import { Button, Group, Title, useMantineColorScheme } from "@mantine/core";

const MainHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group position="apart" style={{ width: "100%" }}>
      <Title>Dashboard</Title>
      <Button onClick={() => toggleColorScheme()}>Toggle Theme</Button>
    </Group>
  );
};

export default MainHeader;
