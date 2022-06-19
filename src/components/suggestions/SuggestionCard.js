import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { upvoteRequest } from '../../redux/features/product-requests/productRequestsSlice';

// styles
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles';

const SuggestionCard = ({
   id,
   title,
   description,
   category,
   upvotes,
   comments,
}) => {
   const dispatch = useDispatch();

   return (
      <SuggestionCardWrap>
         <span className='upvote-count tablet'>
            <button
               className='btn upvote-btn'
               onClick={(e) => {
                  dispatch(upvoteRequest(id));
                  e.stopPropagation();
               }}
            >
               <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
                  <path
                     d='M1 6l4-4 4 4'
                     stroke='#4661E6'
                     strokeWidth='2'
                     fill='none'
                     fillRule='evenodd'
                  />
               </svg>
               <span>{upvotes}</span>
            </button>
         </span>
         <Link to={`/feedback-detail/${id}`}>
            <span>
               <h3>{title}</h3>
               <p>{description}</p>
               <button className='btn'>{category}</button>
            </span>
         </Link>

         <span className='upvote-count'>
            <button
               className=' btn mobile upvote-btn'
               onClick={(e) => {
                  dispatch(upvoteRequest(id));
                  e.stopPropagation();
               }}
            >
               <svg width='10' height='7' xmlns='http://www.w3.org/2000/svg'>
                  <path
                     d='M1 6l4-4 4 4'
                     stroke='#4661E6'
                     strokeWidth='2'
                     fill='none'
                     fillRule='evenodd'
                  />
               </svg>
               <span>{upvotes}</span>
            </button>
            <Link to={`/feedback-detail/${id}`}>
               <button className='btn comment-btn'>
                  <svg
                     width='18'
                     height='16'
                     xmlns='http://www.w3.org/2000/svg'
                  >
                     <path
                        d='M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z'
                        fill='#CDD2EE'
                        fillRule='nonzero'
                     />
                  </svg>
                  <span>{comments?.length}</span>
               </button>
            </Link>
         </span>
      </SuggestionCardWrap>
   );
};

export default SuggestionCard;

const SuggestionCardWrap = styled.article`
   display: grid;
   gap: 1rem;
   background-color: ${(props) => props.theme.white};
   padding: 2rem;
   border-radius: ${misc.rounded.sm};

   h3 {
      margin-bottom: 1rem;
   }

   p {
      color: ${(props) => props.theme.grey_dark};
   }

   .upvote-count {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .btn {
         display: flex;
         align-items: center;
         gap: 0.5rem;
      }

      .comment-btn {
         background-color: transparent;
      }

      .upvote-btn {
         position: relative;
         z-index: 20;
      }
   }

   .tablet {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: auto 1fr auto;
      gap: 2.5rem;

      .mobile {
         display: none !important;
      }

      .tablet {
         display: block;

         .btn {
            flex-direction: column;
            padding: 0.85rem;
            min-width: 40px;
         }
      }
   }
`;
