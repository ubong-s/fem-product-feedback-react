import React from 'react';
import styled from 'styled-components';
import { Seo } from '../components/shared';

const NotFound = () => {
   return (
      <NotFoundWrap>
         <Seo title='404' />
         <h1>Oops,page cannot be found</h1>
      </NotFoundWrap>
   );
};

export default NotFound;

const NotFoundWrap = styled.section``;
