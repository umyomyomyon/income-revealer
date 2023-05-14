import { MantineProvider } from '@mantine/core';
import theme from './styles/theme';

type Props = {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme}
      >
        {children}
      </MantineProvider>
  )
}
