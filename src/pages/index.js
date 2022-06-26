import styled from 'styled-components';
import { Seo } from '../components/shared';
import { Header, SuggestionsContent } from '../components/suggestions';
import { breakpoints } from '../styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterSuggestions } from '../redux/features/product-requests/productRequestsSlice';

export default function Home() {
   const dispatch = useDispatch();
   const {
      filters: { sort, category },
   } = useSelector((state) => state.productRequests);

   useEffect(() => {
      dispatch(filterSuggestions());
      // eslint-disable-next-line
   }, [sort, category]);

   return (
      <>
         <Seo />
         <HomeWrap>
            <HomeInner className='container'>
               <Header />
               <SuggestionsContent />
            </HomeInner>
         </HomeWrap>
      </>
   );
}

const HomeWrap = styled.main`
   padding-bottom: 1rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      min-height: 100vh;
      padding: 5rem 0;
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 7rem 0;
   }
`;
const HomeInner = styled.div`
   &.container {
      width: 100%;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      gap: 3rem;

      &.container {
         width: 88%;
         max-width: 1050px;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr 3fr;
      align-items: flex-start;

      &.container {
         width: 75%;
      }
   }
`;
