import React from 'react';
import PropTypes from 'prop-types';
import './photo.scss';

const Photo = (props) => {

    const { thumbnailUrl, title, clickPhoto, index} = props;

    return(
        <div 
            className="photo" 
            style={{backgroundImage: `url(${thumbnailUrl})`}}
            onClick={() => { clickPhoto(index)}}
        >
            <div className="photo__name">
                { title }
            </div>
        </div>
    );
};

Photo.propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    clickPhoto: PropTypes.func.isRequired,
}

export default Photo;