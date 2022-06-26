import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { replyComment } from '../../redux/features/product-requests/productRequestsSlice';
import { breakpoints, typography } from '../../styles';

const Comment = ({ comment, status }) => {
   const { id: feedbackId } = useParams();
   const { currentUser } = useSelector((state) => state.user);

   const dispatch = useDispatch();
   const [activeForm, setActiveForm] = useState(null);
   const [replyValue, setReplyValue] = useState('');
   const [innerReplyValue, setInnerReplyValue] = useState('');
   const { id: commentId, user, content, replies } = comment;

   const openReplyForm = (e) => {
      const id = e.target.dataset.btn;
      if (activeForm === id) {
         setActiveForm(null);
      } else {
         setActiveForm(id);
         setInnerReplyValue('');
      }
   };

   const closeReplyForm = () => {
      setActiveForm(null);
   };

   return (
      <CommentWrap>
         <div className='tablet-block'>
            <img src={user.image} alt={user.name} />
            {replies && <div className='line'></div>}
         </div>
         <div>
            <div className='comment-header'>
               <img src={user.image} alt={user.name} className='mobile-block' />
               <div>
                  <h4>{user.name}</h4>
                  <p>@{user.username}</p>
               </div>
               <button
                  data-btn={`comment-${commentId}`}
                  className='no-style-btn'
                  onClick={openReplyForm}
               >
                  Reply
               </button>
            </div>
            <p className='comment'>{content}</p>

            <InnerForm
               className={
                  activeForm === `comment-${commentId}`
                     ? 'comment-form active'
                     : 'comment-form'
               }
               onSubmit={(e) => e.preventDefault()}
            >
               <textarea
                  type='text'
                  rows='2'
                  maxLength={250}
                  value={replyValue}
                  onChange={(e) => setReplyValue(e.target.value)}
               />
               <button
                  disabled={!replyValue}
                  className='btn add-btn'
                  type='button'
                  onClick={() => {
                     dispatch(
                        replyComment({
                           feedbackId: Number(feedbackId),
                           status,
                           commentId,
                           currentUser,
                           reply: replyValue,
                           replyingTo: user.username,
                        })
                     );
                     closeReplyForm();
                     setReplyValue('');
                  }}
               >
                  Post Reply
               </button>
            </InnerForm>

            {replies && (
               <InnerCommentsWrap>
                  {replies.map((reply, index) => {
                     const { user, content, replyingTo } = reply;

                     return (
                        <InnerComment key={index}>
                           <div>
                              <img
                                 src={user.image}
                                 alt={user.name}
                                 className='inner-tablet-block'
                              />
                              <div className='inner-line'></div>
                           </div>
                           <div>
                              <div className='inner-comment-header'>
                                 <img
                                    src={user.image}
                                    alt={user.name}
                                    className='inner-mobile-block'
                                 />
                                 <div>
                                    <h4>{user.name}</h4>
                                    <p>@{user.username}</p>
                                 </div>
                                 <button
                                    data-btn={`innner-comment-${index}`}
                                    className='no-style-btn'
                                    type='button'
                                    onClick={openReplyForm}
                                 >
                                    Reply
                                 </button>
                              </div>
                              <p className='inner-comment'>
                                 {replyingTo !== user.username ? (
                                    <span>@{replyingTo}</span>
                                 ) : null}{' '}
                                 {content}
                              </p>

                              <InnerForm
                                 className={
                                    activeForm === `innner-comment-${index}`
                                       ? 'comment-form active'
                                       : 'comment-form'
                                 }
                                 onSubmit={(e) => e.preventDefault()}
                              >
                                 <textarea
                                    name='inner-comment'
                                    type='text'
                                    rows='2'
                                    maxLength={250}
                                    value={innerReplyValue}
                                    onChange={(e) =>
                                       setInnerReplyValue(e.target.value)
                                    }
                                 />
                                 <button
                                    disabled={!innerReplyValue}
                                    className='btn add-btn'
                                    type='button'
                                    onClick={() => {
                                       dispatch(
                                          replyComment({
                                             feedbackId: Number(feedbackId),
                                             status,
                                             commentId,
                                             currentUser,
                                             reply: innerReplyValue,
                                             replyingTo: user.username,
                                          })
                                       );
                                       closeReplyForm();
                                       setInnerReplyValue('');
                                    }}
                                 >
                                    Post Reply
                                 </button>
                              </InnerForm>
                           </div>
                        </InnerComment>
                     );
                  })}
               </InnerCommentsWrap>
            )}
         </div>
      </CommentWrap>
   );
};

export default Comment;

const CommentWrap = styled.article`
   border-bottom: 2px solid rgba(0, 0, 0, 0.05);
   padding: 2rem 0;

   &:last-child {
      border-bottom: transparent;
      padding-bottom: 0;
   }

   .tablet-block {
      display: none;
   }

   img {
      border-radius: 50%;
   }

   .line {
      width: 2px;
      height: 100%;
      background: ${(props) => props.theme.grey_light};
      display: flex;
      justify-content: center;
      margin: 1.5rem 0;
   }

   .comment-header {
      display: grid;
      grid-template-columns: 50px 1fr auto;
      gap: 1.5rem;
      align-items: center;
      margin-bottom: 1rem;

      p {
         margin-bottom: 0;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 2rem;
      padding: 2.5rem 0;

      .mobile-block {
         display: none;
      }

      .tablet-block {
         display: flex;
         flex-direction: column;
         align-items: center;

         img {
            width: 70%;
         }
      }

      .comment-header {
         grid-template-columns: 1fr auto;
         margin-bottom: 1rem;
      }

      .comment {
         margin-bottom: 0;
      }
   }
`;

const InnerCommentsWrap = styled.div`
   display: grid;
   gap: 2rem;
   padding-top: 1rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      gap: 1rem;
      padding-top: 2rem;
      margin-left: -2rem;
   }
`;

const InnerComment = styled.article`
   display: grid;
   grid-template-columns: auto 1fr;
   gap: 2rem;

   .inner-line {
      width: 2px;
      height: 90%;
      background: ${(props) => props.theme.grey_light};
      display: flex;
      justify-content: center;
   }

   .inner-tablet-block {
      display: none;
   }

   .inner-comment-header {
      display: grid;
      grid-template-columns: 50px 1fr auto;
      gap: 1.5rem;
      align-items: center;
      margin-bottom: 1rem;

      p {
         margin-bottom: 0;
      }
   }

   .inner-comment {
      padding-bottom: 0;

      span {
         color: ${(props) => props.theme.purple};
         font-weight: ${typography.weight.bold};
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      gap: 0.5rem;

      .inner-mobile-block {
         display: none;
      }

      .inner-tablet-block {
         display: block;
         width: 70%;
      }

      .inner-line {
         display: none;
      }

      .inner-comment-header {
         grid-template-columns: 1fr auto;
         margin-bottom: 1rem;
      }
   }
`;

const InnerForm = styled.form`
   margin: 0;
   position: relative;
   display: grid;
   grid-template-columns: 1fr auto;
   gap: 1rem;
   align-items: flex-start;
   z-index: -2;
   opacity: 0;
   height: 0;
   transform: translateY(-100%);
   transition: all 0.5s ease-out;

   &.active {
      margin: 1.5rem 0 1rem;
      transform: translateY(0);
      height: 65px;
      z-index: 2;
      opacity: 1;
   }

   button {
      transition: all 0.5s ease-out;
      &:disabled {
         cursor: not-allowed;
         opacity: 0.6;
      }
   }
`;
