import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleRoadMapMobile } from '../../redux/features/product-requests/productRequestsSlice';
import { breakpoints, typography } from '../../styles';

const RoadmapTabs = () => {
   const dispatch = useDispatch();
   const {
      planned,
      in_progress,
      live,
      filters: { roadmapMobile },
   } = useSelector((state) => state.productRequests);

   return (
      <RoadmapTabsWrap status={roadmapMobile}>
         <button
            data-status='planned'
            className={roadmapMobile === 'planned' ? 'active' : null}
            onClick={(e) =>
               dispatch(toggleRoadMapMobile(e.target.dataset.status))
            }
         >
            Planned ({planned.length})
         </button>
         <button
            data-status='in-progress'
            className={roadmapMobile === 'in-progress' ? 'active' : null}
            onClick={(e) =>
               dispatch(toggleRoadMapMobile(e.target.dataset.status))
            }
         >
            In-Progress ({in_progress.length})
         </button>
         <button
            data-status='live'
            className={roadmapMobile === 'live' ? 'active' : null}
            onClick={(e) =>
               dispatch(toggleRoadMapMobile(e.target.dataset.status))
            }
         >
            Live ({live.length})
         </button>
      </RoadmapTabsWrap>
   );
};

export default RoadmapTabs;

const RoadmapTabsWrap = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   border-bottom: 2px solid rgba(0, 0, 0, 0.1);

   button {
      cursor: pointer;
      padding: 1rem;
      background: none;
      border: none;
      font-weight: ${typography.weight.semibold};
      color: ${(props) => props.theme.grey_dark};

      &.active {
         color: ${(props) => props.theme.dark_blue};
         border-bottom: 4px solid
            ${(props) =>
               props.status === 'live'
                  ? props.theme.blue
                  : props.status === 'in-progress'
                  ? props.theme.purple
                  : props.theme.orange};
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: none;
   }
`;
