import { createGlobalStyle, css } from 'styled-components';
import { typography, breakpoints, misc } from '.';

const bodyStyles = css`
   font-family: ${typography.type.primary};
   background: ${(props) => props.theme.grey_light};
   color: ${(props) => props.theme.grey_dark};
   line-height: 1.6;
   max-width: 1600px;
   font-weight: 400;
   margin: auto;

   *,
   ::after,
   ::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${typography.type.primary};
   }

   main {
      min-height: 80vh;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      font-weight: ${typography.weight.bold};
      letter-spacing: 0.5px;
      line-height: 1;
      color: ${(props) => props.theme.dark_blue};
   }

   p {
      font-size: 1rem;
      margin-bottom: 1rem;
      color: ${(props) => props.theme.grey_dark};
   }

   img {
      max-width: 100%;
   }

   ul {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      letter-spacing: 0.5px;
   }

   input,
   textarea {
      width: 100%;
      border-radius: ${misc.rounded.sm};
      padding: 1rem;
      outline: none;
      border: none;
      background: ${(props) => props.theme.grey_light};
      color: ${(props) => props.theme.grey_dark};
   }

   .container {
      width: 88%;
      margin: auto;

      @media screen and (min-width: ${breakpoints.tablet}) {
         width: 88%;
      }

      @media screen and (min-width: ${breakpoints.desktop}) {
         width: 64%;
         max-width: 1000px;
      }
   }

   .btn {
      cursor: pointer;
      background-color: ${(props) => props.theme.grey_light};
      padding: 0.5rem 1rem;
      border-radius: ${misc.rounded.sm};
      border: none;
      color: ${(props) => props.theme.blue};
      font-weight: ${typography.weight.bold};
      text-transform: capitalize;
   }

   .add-btn,
   .edit-btn,
   .cancel-btn,
   .delete-btn {
      color: ${(props) => props.theme.white};
      padding: 0.75rem 1.5rem;
      transition: all 0.3s ease-in-out;

      &:hover {
         opacity: 0.6;
      }
   }

   .add-btn {
      background-color: ${(props) => props.theme.purple};
   }

   .edit-btn {
      background-color: ${(props) => props.theme.blue};
   }

   .cancel-btn {
      background-color: ${(props) => props.theme.dark_blue};
   }

   .delete-btn {
      background-color: ${(props) => props.theme.red};
   }

   .no-style-btn {
      cursor: pointer;
      background-color: transparent;
      border: none;
      font-weight: ${typography.weight.semibold};
      color: ${(props) => props.theme.blue};
   }
`;

export const GlobalStyle = createGlobalStyle`
   html {
      scroll-behavior: smooth;
   }

   body {
      ${bodyStyles}
   }
`;
