import React, { Fragment } from 'react';
import './navigation.scss';

const Navigation = (props) => {
    const isHomePage = props.location.pathname === '/';

    return(!isHomePage &&
        <Fragment>
            <div className="navigation">
                <button 
                    className="navigation__link navigation__link--back" 
                    onClick={()=>props.history.goBack()}
                >
                    Туда
                </button>
                <button
                    className="navigation__link navigation__link--forward"  
                    onClick={()=>props.history.goForward()}
                >
                    Сюда
                </button>
            </div>
            <hr />
        </Fragment>
    )
};

export default Navigation;