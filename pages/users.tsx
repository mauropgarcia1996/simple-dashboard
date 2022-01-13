import { Card, Skeleton, TextInput, Title } from "@mantine/core";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { useState } from "react";
import { getUsers } from "../utils/api";
import { User } from "../commons/interfaces";
import SimpleTable from "../components/Table/SimpleTable";
import { useNotifications } from "@mantine/notifications";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withTranslation } from "next-i18next";

const Users: NextPage = ({ t, data }: any) => {
  const [loading, setLoading] = useState(false);
  const notifications = useNotifications();
  const COLUMNS = [
    {
      title: t('users.table_name_label'),
      filter: true,
    },
    {
      title: t('users.table_username_label'),
      filter: false,
    },
    {
      title: t('users.table_address_label'),
      filter: false,
    },
    {
      title: t('users.table_company_label'),
      filter: true,
    },
  ];

  /**
   * Method that handles the filters changes
   * @param e FormEvent Event with the value
   */
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

  /**
   * Method that renders the filters components
   * @returns <tr></tr>
   */
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
      <Title data-testid="users-title" style={{ marginBottom: 25 }}>
        {t('users.title')}
      </Title>
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const res = await getUsers();
  const data = await res.json();

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      data: data ? data : [],
    },
  };
};

export default withTranslation()(Users);
