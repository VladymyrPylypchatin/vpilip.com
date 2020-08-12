import React from 'react';

import DownloadModal from './DownloadModal/DownloadModal';
import MainScreen from './MainScreen/MainScreen';
import ReasonScreen from './ReasonScreen/ReasonScreen';
import ResultsScreen from './ResultsScreen/ResultsScreen';
import CTAScreen from './CTAScreen/CTAScreen'

const FeatureGuideTemplate = () => {

    return (
        <div>
            <DownloadModal
                isActive={true}
                // title="Download Your SaaS App Features Guide"
                placeholder="Your email"
                fitContent
            />
            <MainScreen />
            <ReasonScreen />
            <ResultsScreen />
            <CTAScreen />
        </div>
    );
};

export default FeatureGuideTemplate;