import { Card, Table, Title } from "@mantine/core";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Post } from "../commons/interfaces";
import { getPosts } from "../utils/api";
import SimpleTable from "../components/Table/SimpleTable";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTranslation } from "next-i18next";

const Posts: NextPage = ({ t, data }: any) => {
  const COLUMNS = [
    {
      title: t('posts.table_title_label'),
      filter: false,
    },
    {
      title: t('posts.table_body_label'),
      filter: false,
    },
  ];
  return (
    <div style={{ paddingInline: 10 }}>
      <Title data-testid="posts-title" style={{ marginBottom: 25 }}>
        {t('posts.title')}
      </Title>
      <Card shadow="lg" withBorder>
        <SimpleTable columns={COLUMNS}>
          {data.map((e: Post) => (
            <tr key={e.id}>
              <td>{e.title}</td>
              <td>{e.body}</td>
            </tr>
          ))}
        </SimpleTable>
      </Card>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const res = await getPosts();
  const data = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      data,
    },
  };
};

export default withTranslation()(Posts);
