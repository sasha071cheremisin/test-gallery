import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './user.scss';

const User = (props) => {

    const { name, id } = props;

    return (
        <Link className="user" to={`/users/${id}`}>
            <div className="user__name">{ name }</div> 
        </Link>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default User;