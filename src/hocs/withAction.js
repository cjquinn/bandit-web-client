import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAction = (WrappedComponent, action) => {
    class Container extends Component {
        state = {isWorking: false};

        handleClick = () => this.setState(
            {isWorking: true},
            this.props
                .action()
                .finally(() => this.setState({isWorking: false}))
        );

        render() {
            return (
                <WrappedComponent
                    disabled={this.state.isWorking}
                    onClick={this.handleClick}
                    {...this.props}
                />
            );
        }
    }

    Container.propTypes = {
        action: PropTypes.func.isRequired
    };

    const mapDispatchToProps = (dispatch, ownProps) => ({
        fetchList: () => dispatch(action(ownProps))
    });

    return connect(null, mapDispatchToProps)(Container);
};

export default withAction;
