import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    "BASE": ["#F7F7FF", "#F7F7FF", "#F7F7FF","#F7F7FF","#F7F7FF","#F7F7FF","#F7F7FF","#F7F7FF","#F7F7FF","#F7F7FF",],
    "ERROR": ["#FE5F55", "#FE5F55","#FE5F55","#FE5F55","#FE5F55","#FE5F55","#FE5F55","#FE5F55","#FE5F55","#FE5F55",],
    "BLACK": ["#495867", "#495867","#495867","#495867","#495867","#495867","#495867","#495867","#495867","#495867",],
    "BLUE": ["#577399", "#577399","#577399","#577399","#577399","#577399","#577399","#577399","#577399","#577399",],
    "LIGHT_BLUE": ["#BDD5EA", "#BDD5EA","#BDD5EA","#BDD5EA","#BDD5EA","#BDD5EA","#BDD5EA","#BDD5EA","#BDD5EA","#BDD5EA",],
  },
  components: {
    Text: {
      styles: {
        root: {
          color: "#495867"
        }
      }
    }
  },
  globalStyles: (theme) => ({
    body: {
      backgroundColor: theme.colors.BASE[0],
    }
  })
};

export default theme;
