import React from 'react';
import User from '../user';
import { withGalleryService, compose, withData } from '../hoc-helpers';
import PropTypes from 'prop-types';
import './user-list.scss';

const mapUsersMethodToProps = (galleryService) => {
    return {
        getData: galleryService.getAllUsers
    }
}

const UserList = (props) => {

    const userList = props.data.map(user => <User name={ user.name } id={ user.id } key={ user.id } />);

    return(
        <div className='user-list'>
            { userList }  
        </div>
    )
};

UserList.propTypes = {
    data: PropTypes.array.isRequired,
}

export default compose(
    withGalleryService(mapUsersMethodToProps),
    withData,
)(UserList);