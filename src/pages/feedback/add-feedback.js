import { useState } from 'react';
import styled from 'styled-components';
import { BackBtn, Seo } from '../../components/shared';
import { categories } from '../../data/formSelect';
import { breakpoints, misc, typography } from '../../styles';
import { addNewFeedback } from '../../redux/features/product-requests/productRequestsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validate } from '../../utils/helpers';

const AddFeedback = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const formik = useFormik({
      initialValues: {
         title: '',
         description: '',
      },
      validate,
      onSubmit: (values) => {
         dispatch(
            addNewFeedback({
               ...values,
               category,
            })
         );
         navigate('/');
      },
   });

   const [sortActive, setSortActive] = useState(false);
   const [category, setCategory] = useState('feature');

   const toggleSort = () => {
      setSortActive(!sortActive);
   };

   const closeSort = () => {
      setSortActive(false);
   };

   const cancelFeedbackSubmit = () => {
      navigate(-1);
      setCategory('feature');
   };

   return (
      <>
         <Seo title='Add New Feedback' />
         <AddFeedbackWrap>
            <div className='container'>
               <BackBtn />

               <FormWrap>
                  <div className='icon'>
                     <svg
                        width='56'
                        height='56'
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
                           <circle fill='url(#a)' cx='28' cy='28' r='28' />
                           <path
                              fill='#FFF'
                              fillRule='nonzero'
                              d='M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z'
                           />
                        </g>
                     </svg>
                  </div>

                  <h1>Create New Feedback</h1>

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
                              toggleSort();
                           }}
                        >
                           <span>{category}</span>
                           <button className={sortActive ? 'active' : null}>
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
                           className={sortActive ? 'options active' : 'options'}
                        >
                           {categories
                              .filter((cat) => cat.type !== 'all')
                              .map((c) => (
                                 <button
                                    type='button'
                                    key={c.id}
                                    onClick={() => {
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
                           Add Feedback
                        </button>
                        <button
                           type='button'
                           className='btn cancel-btn'
                           onClick={cancelFeedbackSubmit}
                        >
                           Cancel
                        </button>
                     </div>
                  </Form>
               </FormWrap>
            </div>
         </AddFeedbackWrap>
      </>
   );
};

export default AddFeedback;

const AddFeedbackWrap = styled.section`
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
   gap: 0.5rem;

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

      .error-msg {
         transition: all 0.3s ease-in-out;
         color: red;
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
         display: flex;
         justify-content: flex-end;
      }
   }
`;
