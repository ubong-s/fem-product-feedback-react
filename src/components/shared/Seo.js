import { Helmet } from 'react-helmet';

const Seo = ({ title, description }) => {
   return (
      <Helmet>
         <title>
            {title ? `${title} | Product Feedback` : 'Product Feedback'}{' '}
         </title>
         <meta
            name='description'
            content={
               description || 'FrontendMentor product feeback suggestions'
            }
         />
         <link rel='icon' href='/favicon.ico' />
      </Helmet>
   );
};

export default Seo;
