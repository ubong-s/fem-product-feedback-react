import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import RoadmapCard from './RoadmapCard';
import { breakpoints } from '../../styles';

const RoadmapContent = () => {
   const {
      live,
      in_progress,
      planned,
      filters: { roadmapMobile },
   } = useSelector((state) => state.productRequests);

   return (
      <RoadmapContentWrap>
         <RoadmapWrap className={roadmapMobile === 'planned' ? 'active' : null}>
            <h2>Planned ({planned.length})</h2>
            <p>Ideas prioritized for research</p>
            <RoadmapColumn>
               {planned.map((request) => (
                  <RoadmapCard key={request.id} {...request} />
               ))}
            </RoadmapColumn>
         </RoadmapWrap>
         <RoadmapWrap
            className={roadmapMobile === 'in-progress' ? 'active' : null}
         >
            <h2>In-Progress ({in_progress.length})</h2>
            <p>Currently being developed</p>
            <RoadmapColumn>
               {in_progress.map((request) => (
                  <RoadmapCard key={request.id} {...request} />
               ))}
            </RoadmapColumn>
         </RoadmapWrap>
         <RoadmapWrap className={roadmapMobile === 'live' ? 'active' : null}>
            <h2>Live ({live.length})</h2>
            <p>Realeased features</p>
            <RoadmapColumn>
               {live.map((request) => (
                  <RoadmapCard key={request.id} {...request} />
               ))}
            </RoadmapColumn>
         </RoadmapWrap>
      </RoadmapContentWrap>
   );
};

export default RoadmapContent;

const RoadmapContentWrap = styled.div`
   padding: 2rem 1.5rem;
   display: grid;
   gap: 1rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      gap: 0.75rem;
      padding: 2rem 0;
      grid-template-columns: repeat(3, 1fr);
   }
`;

const RoadmapWrap = styled.div`
   opacity: 0;
   height: 0;
   transition: all 0.3s ease-in-out;

   h2 {
      margin-bottom: 1rem;
   }

   &.active {
      opacity: 1;
      height: auto;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      opacity: 1;
      height: auto;
   }
`;

const RoadmapColumn = styled.div`
   display: grid;
   gap: 1rem;
   margin-top: 1.5rem;
`;
