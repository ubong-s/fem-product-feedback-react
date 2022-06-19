import { ThemeProvider } from 'styled-components';

export const colors = {
   primaryPink: '#e7816b',
   lightPink: '#FDF3F0',
   white: '#FFFFFF',
   dark: '#1D1D1F',
   gray: '#8e8e8f',

   // primary/secondary
   purple: '#ad1fea',
   blue: '#4661e6',
   orange: '#f49f85',
   red: '#d73737',
   dark_blue: '#3a4374',

   purple_hover: '#c75af6',
   blue_hover: '#7c91f9',
   blue_light: '#62bcfa',
   red_hover: '#e98888',

   // gradient
   radial_gradient: `radial-gradient(128.88% 128.88% at 103.9% -10.39%, #e84d70 0%, #a337f6 53.09%, #28a7ed 100%)`,

   linear_gradient: `linear-gradient(to right, #FF2F29, #0A0910 )`,
   /* Neutral */
   grey_darkest: '#373f68',
   grey_darker_15: 'hsl(231, 33%, 34%, 0.15)',
   grey_darker_hover: '#656ea3',
   grey_dark: '#647196',
   grey_hover: '#cfd7ff',

   input_placeholder: '#8c92b3',

   grey: '#f2f4ff',
   grey_75: 'hsl(231, 100%, 97%, 0.75)',
   grey_light: '#f7f8fd',
};

export const misc = {
   rounded: {
      xs: '5px',
      sm: '10px',
      md: '15px',
      lg: '20px',
      full: '999px',
   },
};

export const typography = {
   type: {
      primary: `'Jost', sans-serif`,
   },
   weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
   },
};

export const breakpoints = {
   mobile: '375px',
   tablet: '768px',
   desktop: '1024px',
   large: '1100px',
   hd: '1440px',
};

export const Theme = ({ children }) => (
   <ThemeProvider theme={colors}>{children}</ThemeProvider>
);
