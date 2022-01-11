import { Group, List, ListItem, Text, Title } from "@mantine/core";
import type { NextPage } from "next";

const Home: NextPage = ({ data }: any) => {
  return (
    <div>
      <Group direction="column">
        <Title>Home</Title>
        <Text>
          This is a simple dashboard created to test some technologies.
        </Text>
        <List withPadding spacing="lg">
          <ListItem>Mantine.dev</ListItem>
          <ListItem>Next.js & Typescript</ListItem>
          <ListItem>Internationalization</ListItem>
          <ListItem>Commitizen</ListItem>
          <ListItem>And more...</ListItem>
        </List>
      </Group>
    </div>
  );
};

export default Home;
