import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import RoadMap from './pages/roadmap';
import AddFeedback from './pages/feedback/add-feedback';
import NotFound from './pages/notFound';
import SingleFeedbackDetail from './pages/feedback-detail/singleFeedbackDetail';
import { fetchStatuses } from './redux/features/product-requests/productRequestsSlice';
import { useDispatch } from 'react-redux';
import EditFeedback from './pages/feedback/edit-feedback';

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchStatuses());
   }, []);
   return (
      <>
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/roadmap' element={<RoadMap />} />
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
      </>
   );
}

export default App;
