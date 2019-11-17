import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAction = (WrappedComponent, action) => {
    class Container extends Component {
        _isMounted = false;
        state = {isWorking: false};

        handleClick = () => this.setState(
            {isWorking: true},
            () =>
                this.props
                    .action()
                    .finally(() => {
                        if (!this._isMounted) {
                            return;
                        }

                        this.setState({isWorking: false});
                    })
        );

        componentDidMount() {
            this._isMounted = true;
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            const { action: _, ...props } = this.props; // eslint-disable-line no-unused-vars

            return (
                <WrappedComponent
                    disabled={this.state.isWorking}
                    onClick={this.handleClick}
                    {...props}
                />
            );
        }
    }

    Container.propTypes = {
        action: PropTypes.func.isRequired
    };

    const mapDispatchToProps = (dispatch, ownProps) => ({
        action: () => dispatch(action(ownProps))
    });

    return connect(null, mapDispatchToProps)(Container);
};

export default withAction;
