import React from 'react';

import MainScreen from './MainScreen/MainScreen';
import ReasonScreen from './ReasonScreen/ReasonScreen';
import ResultsScreen from './ResultsScreen/ResultsScreen';
import CTAScreen from './CTAScreen/CTAScreen'

const FeatureGuideTemplate = () => {
    return (
        <div>
            <MainScreen />
            <ReasonScreen />
            <ResultsScreen />
            <CTAScreen />
        </div>
    );
};

export default FeatureGuideTemplate;