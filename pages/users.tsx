import { Card, Skeleton, TextInput } from "@mantine/core";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { getUsers } from "../utils/api";
import { User } from "../commons/interfaces";
import SimpleTable from "../components/Table/SimpleTable";
import { useNotifications } from "@mantine/notifications";

const COLUMNS = [
  {
    title: "Name",
    filter: true,
  },
  {
    title: "Username",
    filter: false,
  },
  {
    title: "Address",
    filter: false,
  },
  {
    title: "Company",
    filter: true,
  },
];

const Users: NextPage = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const notifications = useNotifications();

  const handleFilterChange = (e: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notifications.showNotification({
        title: "Hey there!",
        message: "Remember that filters do not work! 🤥",
      });
    }, 3000);
  };

  const renderFilters = () => {
    return (
      <tr>
        {COLUMNS.map((e) => (
          <th key={e.title}>
            {e.filter && (
              <TextInput
                disabled={loading}
                placeholder={e.title}
                variant="filled"
                size="xs"
                onBlur={handleFilterChange}
              />
            )}
          </th>
        ))}
      </tr>
    );
  };
  return (
    <div style={{ paddingInline: 10 }}>
      <Card shadow="lg" withBorder>
        <SimpleTable columns={COLUMNS} filters={renderFilters()}>
          {!loading &&
            data.map((e: User) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.address.street}</td>
                <td>{e.company.name}</td>
              </tr>
            ))}
          {loading && (
            <tr>
              <td colSpan={4}>
                <Skeleton height={100} visible={loading}></Skeleton>
              </td>
            </tr>
          )}
        </SimpleTable>
      </Card>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await getUsers();
  const data = await res.json();

  return {
    props: {
      data: data ? data : [],
    },
  };
};

export default Users;
