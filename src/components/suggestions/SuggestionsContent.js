// redux
import { useSelector } from 'react-redux';

// styles
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles';

// components
import SuggestionCard from './SuggestionCard';

const SuggestionsContent = () => {
   const requests = useSelector(
      (state) => state.productRequests.filteredRequests
   );

   return (
      <SuggestionsContentWrap>
         <SortAdd>
            <div className='suggestions-count'>
               {/* eslint-disable-next-line */}
               <img
                  src='/assets/suggestions/icon-suggestions.svg'
                  alt='icon-suggestions'
               />
               <p>{requests.length} Suggestions</p>
            </div>
            <div className='sort'>
               <label htmlFor='sort'>Sort by:</label>
               <select name='sort' id='sort'>
                  <option value='first'>first</option>
                  <option value='second'>second</option>
                  <option value='third'>third</option>
                  <option value='fourth'>fourth</option>
               </select>
            </div>
            <button className='btn add-btn'>+ Add Feeback</button>
         </SortAdd>
         <Suggestions>
            {requests.map((s) => (
               <SuggestionCard key={s.id} {...s} />
            ))}
         </Suggestions>
      </SuggestionsContentWrap>
   );
};

export default SuggestionsContent;

const SuggestionsContentWrap = styled.section``;

const SortAdd = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
   gap: 2rem;
   background-color: ${(props) => props.theme.dark_blue};
   padding: 0.5rem 1.5rem;

   .suggestions-count {
      display: none;
   }

   .sort {
      label {
         color: ${(props) => props.theme.white};
         margin-right: 0.5rem;
      }

      select {
         background-color: transparent;
         border: transparent;
         color: ${(props) => props.theme.white};
         font-weight: ${typography.weight.bold};
         outline: none;
         text-transform: capitalize;
         font-size: 1rem;

         option {
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      border-radius: ${misc.rounded.sm};
      grid-template-columns: auto 1fr auto;
      padding: 0.75rem 1rem 0.75rem 1.5rem;

      .suggestions-count {
         display: flex;
         align-items: center;
         gap: 0.75rem;
         color: ${(props) => props.theme.white};

         p {
            margin-bottom: 0;
         }
      }
   }
`;

const Suggestions = styled.div`
   display: grid;
   gap: 1rem;
   padding: 1.5rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: unset;
      gap: 1.5rem;
      margin-top: 1.5rem;
   }
`;
