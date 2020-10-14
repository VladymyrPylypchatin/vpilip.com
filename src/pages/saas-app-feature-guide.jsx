import React from 'react';
import FeatureGuideTemplate from '../templates/FeatureGuideTemplate/FeatureGuideTemplate';
import SEO from '../components/seo';

import PreviewImg from '../assets/img/resources/featureguide/preview.png';

const SaasGuidePage = () => {
    return (
        <>
            <SEO
                title="Guide how to organize product idea for your next tech startup"
                customTitle
                meta={[
                    {
                        property: `og:image`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                    {
                        property: `og:image:secure`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                    {
                        name: `twitter:image`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                    {
                        name: `twitter:image:src`,
                        content: `https://vpilip.com/img/preview.png`,
                    },
                ]}
                description="Turn a vague idea into a clear vision needed to validate, build & launch your next software business."
            />
            <FeatureGuideTemplate />
        </>
    );
};

export default SaasGuidePage;