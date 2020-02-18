import React, { Component } from 'react';
import Spinner from '../spinner';
import Error from '../error';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            error: false,
            isLoading: true
        }

        componentDidMount() {
            const { id } = this.props;

            this.props.getData(id)
                .then(this.onDataLoaded)
                .catch(this.onError);
        }

        onError = (err) => {
            console.error(err);
            this.setState({
                error: true,
                isLoading: false
            });
        }

        onDataLoaded = (data) => {
            this.setState({ 
                data,
                isLoading: false
            });
        }

        render() {
            const { data, error, isLoading } = this.state;

            if (isLoading) return <Spinner />;
            if (error) return <Error />;

            return (
                <View {...this.props} data={data} />
            );
        }
    };
};

export default withData;