import React, { useState } from 'react';

import DownloadModal from './DownloadModal/DownloadModal';
import MainScreen from './MainScreen/MainScreen';
import ReasonScreen from './ReasonScreen/ReasonScreen';
import ResultsScreen from './ResultsScreen/ResultsScreen';
import CTAScreen from './CTAScreen/CTAScreen'

const FeatureGuideTemplate = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const openPopup = () => {
        setPopupOpen(true);
    };

    return (
        <div>
            <DownloadModal
                isActive={isPopupOpen}
                // title="Download Your SaaS App Features Guide"
                placeholder="Your email"
                fitContent
                onClose={() => setPopupOpen(false)}
            />
            <MainScreen onDownloadClick={openPopup} />
            <ReasonScreen />
            <ResultsScreen />
            <CTAScreen onDownloadClick={openPopup} />
        </div>
    );
};

export default FeatureGuideTemplate;