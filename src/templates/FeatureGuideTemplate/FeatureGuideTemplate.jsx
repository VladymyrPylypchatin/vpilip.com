import React, { useState } from 'react';
// import TagManager from 'react-gtm-module';
import DownloadModal from './DownloadModal/DownloadModal';
import MainScreen from './MainScreen/MainScreen';
import ReasonScreen from './ReasonScreen/ReasonScreen';
import ResultsScreen from './ResultsScreen/ResultsScreen';
import CTAScreen from './CTAScreen/CTAScreen'

const FeatureGuideTemplate = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupName, setPopupName] = useState(null);
    const openPopup = (id) => {
        window.dataLayer.push({
            event: 'OpenPopup',
            PopupId: id
        });
        setPopupName(id);
        setPopupOpen(true);
    };

    const closePopup = () => {
        window.dataLayer.push({
            event: 'ClosePopup',
        });
        setPopupName(null);
        setPopupOpen(false);
    };

    return (
        <div>
            <DownloadModal
                popupId={popupName}
                isActive={isPopupOpen}
                // title="Download Your SaaS App Features Guide"
                placeholder="Your email"
                fitContent
                onClose={closePopup}
            />
            <MainScreen onDownloadClick={() => openPopup('MainScreen')} />
            <ReasonScreen />
            <ResultsScreen />
            <CTAScreen onDownloadClick={() => openPopup('FooterCTA')} />
        </div>
    );
};

export default FeatureGuideTemplate;