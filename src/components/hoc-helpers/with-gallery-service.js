import React from 'react';
import { GalleryServiceConsumer } from '../gallery-service-context';

const withGalleryService = (mapMethodsToProps) => (Wrapper) => {
    return (props) => {
        return (
            <GalleryServiceConsumer>
                {
                    (galleryService) => {
                        const propsService = mapMethodsToProps(galleryService);

                        return (
                            <Wrapper {...props} {...propsService} />
                        )
                    }
                }
            </GalleryServiceConsumer>
        )
    }
}

export default withGalleryService;