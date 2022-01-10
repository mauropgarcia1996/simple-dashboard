import { Card, Table } from "@mantine/core";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { Post } from "../commons/interfaces";
import { getPosts } from "../utils/api";
import SimpleTable from "../components/Table/SimpleTable";

const COLUMNS = [
  {
    title: "Title",
    filter: false,
  },
  {
    title: "Body",
    filter: false,
  },
];

const Posts: NextPage = ({ data }: any) => {
  return (
    <div style={{ paddingInline: 10 }}>
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

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await getPosts();
  const data = await res.json();

  return {
    props: { data },
  };
};

export default Posts;
