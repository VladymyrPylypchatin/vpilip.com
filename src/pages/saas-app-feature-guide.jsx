import React from 'react';
import FeatureGuideTemplate from '../templates/FeatureGuideTemplate/FeatureGuideTemplate';
import SEO from '../components/seo';

import PreviewImg from '../assets/img/resources/featureguide/preview.png';

const SaasGuidePage = () => {
    return (
        <>
            <SEO
                title="The non-tech founder's SaaS App Feature Guide by Vova Pilipchatin"
                customTitle
                meta={[
                    {
                        name: `og:image`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                    {
                        name: `og:image:secure`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                    {
                        name: `twitter:image`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                ]}
                description="Shape up your SaaS idea and define its features to make your future app aligned with your vision, business goals, and budget."
            />
            <FeatureGuideTemplate />
        </>
    );
};

export default SaasGuidePage;