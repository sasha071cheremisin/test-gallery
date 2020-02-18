import React, { useState } from 'react';
import { withGalleryService, compose, withData} from '../hoc-helpers';
import Photo from '../photo';
import Popup from "reactjs-popup";
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './photo-list.scss';

const mapPhotoMethodToProps = (galleryService) => {
    return {
        getData: galleryService.getPhotosAlbum
    }
}

const PhotoList = (props) => {

    const [ popupIsOpened, popupOpening ] = useState(false);
    const [ photoId, setPhotoId ] = useState(null);

    const clickPhoto = (id) => {
        setPhotoId(id);
        popupOpening(true);
    }

    const closePopup = () => {
        popupOpening(false);
    }

    const photoList = props.data.map((photo,index) => 
        <Photo 
            clickPhoto={clickPhoto} 
            key={ photo.id } 
            thumbnailUrl={ photo.thumbnailUrl } 
            url={ photo.url } 
            title={ photo.title }
            index={ index }
        />
    );

    const photoListInSlider = props.data.map(photo => 
        <div key={ photo.id }>
            <img src={ photo.url } alt={ photo.title } />
            <p className="legend">{ photo.title }</p>
        </div>
    );

    return(
        <div className="photo-list">
           { photoList }
           <Popup  
                modal
                open={ popupIsOpened }
                closeOnDocumentClick
                onClose={ closePopup }
            >
                <Carousel selectedItem={ photoId }>
                    { photoListInSlider }
                </Carousel>
            </Popup> 
        </div>
    );
};

PhotoList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default compose(
    withGalleryService(mapPhotoMethodToProps),
    withData,
)(PhotoList);