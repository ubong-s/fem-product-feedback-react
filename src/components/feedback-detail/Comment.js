import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints, typography } from '../../styles';

const Comment = ({ comment }) => {
   const [replyForm, setReplyForm] = useState(null);

   const { id, user, content, replies } = comment;

   const openReply = (e) => {
      const id = e.target.dataset.btn;
      if (replyForm === id) {
         setReplyForm(null);
      } else {
         setReplyForm(id);
      }
   };

   useEffect(() => {
      const replyForms = document.querySelectorAll('.reply-form');

      if (replyForm) {
         replyForms.forEach((form) => {
            form.classList.remove('active');
         });
      }
   }, [replyForm]);

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
                  data-btn={`comment-${id}`}
                  className='no-style-btn'
                  onClick={openReply}
               >
                  Reply
               </button>
            </div>
            <p className='comment'>{content}</p>

            <InnerForm
               className={
                  replyForm === `comment-${id}`
                     ? 'comment-form active'
                     : 'comment-form'
               }
            >
               <textarea type='text' rows='2' />
               <button type='submit' className='btn add-btn'>
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
                                    onClick={openReply}
                                 >
                                    Reply
                                 </button>
                              </div>
                              <p className='inner-comment'>
                                 <span>@{replyingTo}</span> {content}
                              </p>

                              <InnerForm
                                 className={
                                    replyForm === `innner-comment-${index}`
                                       ? 'comment-form active'
                                       : 'comment-form'
                                 }
                              >
                                 <textarea type='text' rows='2' />
                                 <button type='submit' className='btn add-btn'>
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
`;
