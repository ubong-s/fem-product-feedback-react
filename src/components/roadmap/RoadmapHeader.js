import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints, misc, typography } from '../../styles';

const RoadmapHeader = () => {
   return (
      <RoadmapHeaderWrap>
         <div className='go-back'>
            <Link to='/'>
               <span>
                  <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
                     <path
                        d='M6 9L2 5l4-4'
                        stroke='#4661E6'
                        strokeWidth='2'
                        fill='none'
                        fillRule='evenodd'
                     />
                  </svg>
               </span>{' '}
               Go Back
            </Link>
            <h1>Roadmap</h1>
         </div>

         <Link to='/feedback/add-feedback'>
            <button className='add-btn btn'>+ add Feedback</button>
         </Link>
      </RoadmapHeaderWrap>
   );
};

export default RoadmapHeader;

const RoadmapHeaderWrap = styled.header`
   display: flex;
   justify-content: space-between;
   padding: 1.5rem;
   background-color: ${(props) => props.theme.dark_blue};

   .go-back {
      color: ${(props) => props.theme.white};
      font-weight: ${typography.weight.semibold};

      a {
         color: ${(props) => props.theme.white};

         span {
            margin-right: 0.5rem;

            svg {
               path {
                  stroke: white;
               }
            }
         }
      }

      h1 {
         font-size: 1.25rem;
         margin-top: 0.25rem;
         color: ${(props) => props.theme.white};
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      border-radius: ${misc.rounded.sm};
      align-items: center;
      padding: 2rem;

      .go-back {
         h1 {
            font-size: 1.55rem;
            margin-top: 1rem;
         }
      }
   }
`;
