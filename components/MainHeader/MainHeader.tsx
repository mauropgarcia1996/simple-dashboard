import { Button, Group, Title, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";

const MainHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();
  return (
    <Group position="apart" style={{ width: "100%" }}>
      <Title>Dashboard</Title>
      <Group>
        <Button onClick={() => toggleColorScheme()}>Toggle Theme</Button>
        <Link href={router.route} passHref locale={router.locale === "en" ? "es" : "en"}>
          <Button>Change Language</Button>
        </Link>
      </Group>
    </Group>
  );
};

export default MainHeader;
