import {
   RoadmapContent,
   RoadmapTabs,
   RoadmapHeader,
} from '../components/roadmap';
import { Seo } from '../components/shared';

import styled from 'styled-components';
import { breakpoints } from '../styles';

const Roadmap = () => {
   return (
      <>
         <Seo title='Roadmap' />
         <RoadmapWrap>
            <RoadmapInner className='container'>
               <RoadmapHeader />
               <RoadmapTabs />
               <RoadmapContent />
            </RoadmapInner>
         </RoadmapWrap>
      </>
   );
};

export default Roadmap;

const RoadmapWrap = styled.main`
   padding-bottom: 1rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 5rem 0;
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 7rem 0;
   }
`;
const RoadmapInner = styled.div`
   &.container {
      width: 100%;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      gap: 3rem;

      &.container {
         width: 90%;
         max-width: 1110px;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      &.container {
         width: 75%;
      }
   }
`;
