// redux
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// styles
import styled from 'styled-components';
import { updateFilters } from '../../redux/features/product-requests/productRequestsSlice';
import { breakpoints, misc, typography } from '../../styles';

// components
import SuggestionCard from './SuggestionCard';

const sortBtns = [
   { id: 1, type: 'Most Upvotes' },
   { id: 2, type: 'Least Upvotes' },
   { id: 3, type: 'Most Comments' },
   { id: 4, type: 'Least Comments' },
];

const SuggestionsContent = () => {
   const [sortActive, setSortActive] = useState(false);
   const dispatch = useDispatch();
   const {
      suggestion: suggestions,
      filters: { sort },
   } = useSelector((state) => state.productRequests);

   const toggleSort = () => {
      setSortActive(!sortActive);
   };

   const closeSort = () => {
      setSortActive(false);
   };

   return (
      <SuggestionsContentWrap>
         <SortAdd>
            <div className='suggestions-count'>
               {/* eslint-disable-next-line */}
               <img
                  src='/assets/suggestions/icon-suggestions.svg'
                  alt='icon-suggestions'
               />
               <p>{suggestions.length} Suggestions</p>
            </div>
            <Sort>
               <p className='sort-msg'>
                  Sort by: <span onClick={toggleSort}>{sort}</span>
                  <button
                     className={sortActive ? 'active' : null}
                     onClick={toggleSort}
                  >
                     <svg
                        width='10'
                        height='7'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           d='M1 1l4 4 4-4'
                           strokeWidth='2'
                           fill='none'
                           fillRule='evenodd'
                        />
                     </svg>
                  </button>
               </p>
               <div className={sortActive ? 'options active' : 'options'}>
                  {sortBtns.map((s) => (
                     <button
                        key={s.id}
                        onClick={(e) => {
                           dispatch(
                              updateFilters({
                                 name: 'sort',
                                 value: s.type,
                              })
                           );
                           closeSort();
                        }}
                     >
                        <span>{s.type}</span>
                        {sort === s.type && (
                           <span>
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 width='13'
                                 height='11'
                              >
                                 <path
                                    fill='none'
                                    stroke='#AD1FEA'
                                    strokeWidth='2'
                                    d='M1 5.233L4.522 9 12 1'
                                 />
                              </svg>
                           </span>
                        )}
                     </button>
                  ))}
               </div>
            </Sort>
            <button className='btn add-btn'>+ Add Feedback</button>
         </SortAdd>
         <Suggestions>
            {suggestions.map((s) => (
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

      p {
         color: ${(props) => props.theme.white};
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

const Sort = styled.div`
   position: relative;

   .sort-msg {
      color: ${(props) => props.theme.white};
      margin-bottom: 0;

      span {
         cursor: pointer;
      }

      button {
         margin-left: 0.5rem;
         cursor: pointer;
         background-color: transparent;
         border: none;
         outline: none;

         svg {
            font-size: 2rem;
            transition: all 0.3s ease-in-out;

            path {
               stroke: white;
            }
         }

         &.active {
            svg {
               transform: rotate(180deg);
            }
         }
      }
   }

   .options {
      position: absolute;
      top: calc(100% + 1.75rem);
      background-color: ${(props) => props.theme.white};
      display: flex;
      flex-direction: column;
      border-radius: ${misc.rounded.sm};
      box-shadow: 0 10px 40px -7px rgb(55 63 104 / 35%);
      z-index: -1;
      opacity: 0;
      height: 0;
      transition: all 0.3s ease-in-out;

      button {
         cursor: pointer;
         display: flex;
         justify-content: space-between;
         background-color: transparent;
         border: none;
         outline: none;
         color: ${(props) => props.theme.grey_dark};
         width: 200px;
         padding: 0.75rem 1.5rem;
         border-bottom: 2px solid ${(props) => props.theme.grey_light};

         &:last-child {
            border-bottom: none;
         }
      }

      &.active {
         opacity: 1;
         height: auto;
         z-index: 20;
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
