import { Group, List, ListItem, Text, Title } from "@mantine/core";
import type { GetServerSideProps, NextPage } from "next";
import { withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = ({ t, data }: any) => {
  return (
    <div>
      <Group direction="column">
        <Title data-testid="home-title">{t("index.title")}</Title>
        <Text data-testid="home-description">{t("index.description")}</Text>
        <List data-testid="home-list" withPadding spacing="lg">
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
    },
  };
};

export default withTranslation()(Home);
