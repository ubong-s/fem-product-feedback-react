import React from 'react';
import styled from 'styled-components';

const Loading = () => {
   return (
      <LoadingWrap>
         <img src='/assets/shared/eclipse.gif' alt='Loading....' />
      </LoadingWrap>
   );
};

export default Loading;

const LoadingWrap = styled.div`
   display: grid;
   align-items: center;
   justify-items: center;
   height: 100vh;
`;
