import React from 'react';
import { withGalleryService, compose, withData} from '../hoc-helpers';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './album.scss';

const mapPhotoMethodToProps = (galleryService) => {
    return {
        getData: galleryService.getPhotosAlbum
    }
}

const Album = (props) => {
    const { title, id, data } = props;
    const albumImage = data[0].url;

    return(
        <Link to={`/albums/${id}/photos`} className="album" style={{backgroundImage: `url(${albumImage})`}}>
            <div className="album__length">
                Count: { data.length }
            </div>
            <div className="album__name">
                { title }
            </div>
        </Link>
    );
};

Album.propTypes = {
    title: PropTypes.string.isRequired, 
    id: PropTypes.number.isRequired, 
    data: PropTypes.array.isRequired
}

export default compose(
    withGalleryService(mapPhotoMethodToProps),
    withData,
)(Album);