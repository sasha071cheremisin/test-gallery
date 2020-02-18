import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from '../user-list';
import AlbumList from '../album-list';
import PhotoList from '../photo-list';
import { GalleryServiceProvider } from '../gallery-service-context';
import GalleryService from '../../services/gallery-service';
import Navigation from '../navigation';

export default class App extends Component {
    galleryService = new GalleryService();

    render() {
        return (
            <div className="app">
                <GalleryServiceProvider value={ this.galleryService }>
                    <Router>
                        <Route component={ Navigation } />
                        <Switch>
                            <Route exact path="/" component={ UserList } />
                            <Route 
                                path="/users/:id" 
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <AlbumList id={id} />
                                }} 
                            />
                            <Route
                                path="/albums/:id/photos" 
                                render={({ match }) => {
                                    const { id } = match.params;
                                    return <PhotoList id={id} />
                                }} 
                            />
                            <Route render={() => <h2>Page not found!</h2>} />
                        </Switch>
                    </Router>
                </GalleryServiceProvider>
            </div>
        );
    }
}