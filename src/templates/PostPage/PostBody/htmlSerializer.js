import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import { Elements } from 'prismic-reactjs';
import styles from './PostBody.module.scss';

export const htmlSerializer = function (type, element, content, children, key) {

    console.log(type);
    switch (type) {
        case Elements.embed:
            console.log(element);
            return <ReactEmbedGist gist={element.oembed.gist} titleClass={styles.gistTitle} wrapperClass={styles.gist} />;
        default:
            return null;
    }
};