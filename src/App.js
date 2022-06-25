import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchStatuses } from './redux/features/product-requests/productRequestsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from './components/shared';

const Home = lazy(() => import('./pages'));
const Roadmap = lazy(() => import('./pages/roadmap'));
const SingleFeedbackDetail = lazy(() =>
   import('./pages/feedback-detail/singleFeedbackDetail')
);
const AddFeedback = lazy(() => import('./pages/feedback/add-feedback'));
const EditFeedback = lazy(() => import('./pages/feedback/edit-feedback'));
const NotFound = lazy(() => import('./pages/notFound'));

function App() {
   const dispatch = useDispatch();
   const { allRequests } = useSelector((state) => state.productRequests);

   useEffect(() => {
      dispatch(fetchStatuses());
   }, []);
   return (
      <>
         <Suspense fallback={<Loading />}>
            <Routes>
               <Route exact path='/' element={<Home />} />
               <Route exact path='/roadmap' element={<Roadmap />} />
               <Route
                  exact
                  path='feedback/add-feedback'
                  element={<AddFeedback />}
               />
               <Route
                  exact
                  path='feedback/edit-feedback/:id'
                  element={<EditFeedback />}
               />
               <Route
                  exact
                  path='/feedback-detail/:id'
                  element={<SingleFeedbackDetail />}
               />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </Suspense>
      </>
   );
}

export default App;
