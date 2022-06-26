import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BackBtn, Seo } from '../../components/shared';
import { categories, statuses } from '../../data/formSelect';
import { breakpoints, misc, typography } from '../../styles';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import {
   deleteCurrentFeedback,
   editCurrentFeedback,
} from '../../redux/features/product-requests/productRequestsSlice';
import { validate } from '../../utils/helpers';

const EditFeedback = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { id } = useParams();
   const { allRequests } = useSelector((state) => state.productRequests);
   const [sortCategory, setSortCategory] = useState(false);
   const [sortStatus, setSortStatus] = useState(false);
   const currentFeedback = allRequests.find(
      (request) => Number(request.id) === Number(id)
   );

   const [category, setCategory] = useState(currentFeedback?.category || null);
   const [status, setStatus] = useState(currentFeedback?.status || null);

   const formik = useFormik({
      initialValues: {
         title: currentFeedback?.title,
         description: currentFeedback?.description,
      },
      validate,
      onSubmit: (values) => {
         dispatch(
            editCurrentFeedback({
               ...values,
               id,
               category,
               status,
            })
         );
         navigate(-1);
      },
   });

   const toggleSortCategory = () => {
      setSortStatus(false);
      setSortCategory(!sortCategory);
   };

   const toggleSortStatus = () => {
      setSortCategory(false);
      setSortStatus(!sortStatus);
   };

   const closeSort = () => {
      setSortStatus(false);
      setSortCategory(false);
   };

   const deleteFeedback = () => {
      dispatch(deleteCurrentFeedback({ id, status }));
      navigate('/');
   };
   const cancelFeedbackChange = () => {
      navigate(-1);
   };

   useEffect(() => {
      if (!currentFeedback) {
         navigate('/');
      }
      // eslint-disable-next-line
   }, []);

   return (
      <>
         <Seo title='Edit Feedback' />
         <EditFeedbackWrap>
            <div className='container'>
               <BackBtn />

               <FormWrap>
                  <div className='icon'>
                     <svg
                        width='40'
                        height='40'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <defs>
                           <radialGradient
                              cx='103.9%'
                              cy='-10.387%'
                              fx='103.9%'
                              fy='-10.387%'
                              r='166.816%'
                              id='a'
                           >
                              <stop stopColor='#E84D70' offset='0%' />
                              <stop stopColor='#A337F6' offset='53.089%' />
                              <stop stopColor='#28A7ED' offset='100%' />
                           </radialGradient>
                        </defs>
                        <g fill='none' fillRule='evenodd'>
                           <circle fill='url(#a)' cx='20' cy='20' r='20' />
                           <path
                              d='M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z'
                              fill='#FFF'
                              fillRule='nonzero'
                           />
                        </g>
                     </svg>
                  </div>

                  <h1>Editing Feedback</h1>

                  <Form onSubmit={formik.handleSubmit}>
                     <div className='form-group'>
                        <label htmlFor='title' className='form-label'>
                           <span> Feedback Title</span>Add a short, descriptive
                           headline
                        </label>
                        <input
                           type='text'
                           name='title'
                           onChange={formik.handleChange}
                           value={formik.values.title}
                        />
                        {formik.errors.title ? (
                           <span className='error-msg'>
                              {formik.errors.title}
                           </span>
                        ) : null}
                     </div>
                     <div className='form-group'>
                        <p className='form-label'>
                           <span>Category</span>
                           Choose a category for your feedback
                        </p>
                        <div
                           className='options-btn'
                           onClick={(e) => {
                              e.preventDefault();
                              toggleSortCategory();
                           }}
                        >
                           <span>{category}</span>
                           <button
                              type='button'
                              className={sortCategory ? 'active' : null}
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
                        </div>
                        <div
                           className={
                              sortCategory ? 'options active' : 'options'
                           }
                        >
                           {categories
                              .filter((cat) => cat.type !== 'all')
                              .map((c) => (
                                 <button
                                    type='button'
                                    key={c.id}
                                    onClick={(e) => {
                                       setCategory(c.type);
                                       closeSort();
                                    }}
                                 >
                                    <span>{c.text}</span>
                                    {category === c.type && (
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
                     </div>
                     <div className='form-group'>
                        <p className='form-label'>
                           <span>Update Status</span>
                           Change feature State
                        </p>
                        <div
                           className='options-btn'
                           onClick={(e) => {
                              e.preventDefault();
                              toggleSortStatus();
                           }}
                        >
                           <span>{status}</span>
                           <button
                              type='button'
                              className={sortStatus ? 'active' : null}
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
                        </div>
                        <div
                           className={sortStatus ? 'options active' : 'options'}
                        >
                           {statuses.map((s) => (
                              <button
                                 type='button'
                                 key={s.id}
                                 onClick={(e) => {
                                    setStatus(s.type);
                                    closeSort();
                                 }}
                              >
                                 <span>{s.type}</span>
                                 {status === s.type && (
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
                     </div>
                     <div className='form-group'>
                        <label htmlFor='description' className='form-label'>
                           <span>Feedback Detail</span>
                           Include any specific comments on what should be
                           improved, added, etc.
                        </label>
                        <textarea
                           type='text'
                           name='description'
                           onChange={formik.handleChange}
                           value={formik.values.description}
                        />
                        {formik.errors.description ? (
                           <span className='error-msg'>
                              {formik.errors.description}
                           </span>
                        ) : null}
                     </div>
                     <div className='btn-wrap'>
                        <button type='submit' className='btn add-btn'>
                           Save Changes
                        </button>
                        <button
                           type='button'
                           className='btn cancel-btn'
                           onClick={cancelFeedbackChange}
                        >
                           Cancel
                        </button>
                        <button
                           type='button'
                           className='btn delete-btn'
                           onClick={deleteFeedback}
                        >
                           Delete
                        </button>
                     </div>
                  </Form>
               </FormWrap>
            </div>
         </EditFeedbackWrap>
      </>
   );
};

export default EditFeedback;

const EditFeedbackWrap = styled.section`
   padding: 2rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 4rem 0;
   }
   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 6rem 0;
      max-width: 900px;
      margin: auto;
   }
`;
const FormWrap = styled.div`
   position: relative;
   background-color: ${(props) => props.theme.white};
   border-radius: ${misc.rounded.sm};
   padding: 3.5rem 1.5rem 1.5rem;
   margin-top: 4rem;

   .icon {
      position: absolute;
      top: 0;
      transform: translateY(-50%);
   }

   h1 {
      font-size: 18px;
   }
`;

const Form = styled.form`
   padding-top: 2rem;
   display: grid;
   gap: 1rem;

   .form-group {
      position: relative;

      .options {
         position: absolute;
         top: calc(100% + 0.5rem);
         background-color: ${(props) => props.theme.white};
         display: flex;
         flex-direction: column;
         border-radius: ${misc.rounded.sm};
         box-shadow: 0 10px 40px -7px rgb(55 63 104 / 35%);
         z-index: -1;
         opacity: 0;
         height: 0;
         width: 100%;
         transition: all 0.3s ease-in-out;

         button {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            background-color: transparent;
            border: none;
            outline: none;
            color: ${(props) => props.theme.grey_dark};
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
   }

   label,
   p {
      display: grid;
      font-size: 14px;
      margin: 0.9rem 0;

      span {
         font-weight: ${typography.weight.semibold};
         color: ${(props) => props.theme.dark_blue};
      }
   }

   .options-btn {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      border-radius: ${misc.rounded.sm};
      padding: 0.9rem 1.5rem;
      outline: none;
      border: none;
      background: ${(props) => props.theme.grey_light};
      cursor: pointer;

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
               stroke: ${(props) => props.theme.blue};
            }
         }

         &.active {
            svg {
               transform: rotate(180deg);
            }
         }
      }
   }

   input,
   textarea {
      width: 100%;
      border-radius: ${misc.rounded.sm};
      padding: 0.9rem 1.5rem;
      outline: none;
      border: none;
      background: ${(props) => props.theme.grey_light};
   }

   textarea {
      height: 100px;
   }

   .btn-wrap {
      display: grid;
      gap: 1rem;
      margin-top: 1.5rem;
      width: 100%;

      @media screen and (min-width: ${breakpoints.tablet}) {
         grid-template-columns: 1fr auto auto;
         grid-template-areas: 'delete save cancel';

         .delete-btn {
            justify-self: start;
            grid-area: delete;
         }
      }
   }
`;
