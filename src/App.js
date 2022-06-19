import { Routes, Route } from 'react-router-dom';
import Home from './pages';
import RoadMap from './pages/roadmap';
import AddFeedback from './pages/feedback/add-feedback';
import NotFound from './pages/notFound';
import SingleFeedbackDetail from './pages/feedback-detail/singleFeedbackDetail';

function App() {
   return (
      <>
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/add-feedback' element={<AddFeedback />} />
            <Route exact path='/roadmap' element={<RoadMap />} />
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
