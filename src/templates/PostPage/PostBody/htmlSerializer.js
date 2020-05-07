import React from 'react';
import ReactEmbedGist from 'react-embed-gist';
import { Elements } from 'prismic-reactjs';
import styles from './PostBody.module.scss';

export const htmlSerializer = function (type, element, content, children, key) {

    switch (type) {
        case Elements.embed:
            return (
                <div className='post-container'>
                    <ReactEmbedGist gist={element.oembed.gist} titleClass={styles.gistTitle} wrapperClass={styles.gist} />
                </div>
            );
        default:
            return null;
    }
};