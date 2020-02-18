import React from 'react';
import { withGalleryService, compose, withData} from '../hoc-helpers';
import Album from '../album';
import PropTypes from 'prop-types';
import './album-list.scss';

const mapAlbumMethodToProps = (galleryService) => {
    return {
        getData: galleryService.getUserAlbums
    }
}

const AlbumList = (props) => {

    const albumList = props.data.map(album => 
        <Album title={ album.title } id={ album.id } key={ album.id } userId={ album.userId } />
    );
    
    return(
        <div className="album-list">
            { albumList }
        </div>
    );
}

AlbumList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default compose(
    withGalleryService(mapAlbumMethodToProps),
    withData,
)(AlbumList);