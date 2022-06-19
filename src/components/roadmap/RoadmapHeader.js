import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { typography } from '../../styles';

const RoadmapHeader = () => {
   return (
      <RoadmapHeaderWrap>
         <div className='go-back'>
            <Link to='/'>
               <span>{'<'}</span> Go Back
            </Link>
            <h1>Roadmap</h1>
         </div>

         <button className='add-btn btn'>+ add Feedback</button>
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
         }
      }

      h1 {
         font-size: 1.25rem;
         margin-top: 0.25rem;
      }
   }
`;
