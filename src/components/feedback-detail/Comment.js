import styled from 'styled-components';
import { breakpoints, typography } from '../../styles';

const Comment = ({ comment }) => {
   const { user, content, replies } = comment;
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
               <button className='no-style-btn'>Reply</button>
            </div>
            <p className='comment'>{content}</p>

            {replies && (
               <InnerCommentsWrap>
                  {replies.map((reply) => {
                     const { id, user, content, replyingTo } = reply;
                     return (
                        <InnerComment key={id}>
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
                                 <button className='no-style-btn'>Reply</button>
                              </div>
                              <p className='inner-comment'>
                                 <span>@{replyingTo}</span> {content}
                              </p>
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
