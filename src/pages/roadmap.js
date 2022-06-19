import {
   RoadmapContent,
   RoadmapTabs,
   RoadmapHeader,
} from '../components/roadmap';

import { Seo } from '../components/shared';

const Roadmap = () => {
   return (
      <>
         <Seo title='Roadmap' />
         <RoadmapHeader />
         <RoadmapTabs />
         <RoadmapContent />
      </>
   );
};

export default Roadmap;
