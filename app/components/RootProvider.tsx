import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

export function RootProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
