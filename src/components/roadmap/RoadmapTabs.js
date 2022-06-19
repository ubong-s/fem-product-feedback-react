import styled from 'styled-components';
import { typography } from '../../styles';

const RoadmapTabs = () => {
   return (
      <RoadmapTabsWrap>
         <button>Planned</button>
         <button>In-Progress</button>
         <button>Live</button>
      </RoadmapTabsWrap>
   );
};

export default RoadmapTabs;

const RoadmapTabsWrap = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   border-bottom: 2px solid rgba(0, 0, 0, 0.1);

   button {
      padding: 1rem;
      background: none;
      border: none;
      font-weight: ${typography.weight.semibold};
   }
`;
