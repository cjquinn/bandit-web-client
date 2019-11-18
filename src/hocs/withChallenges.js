import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchChallenges } from '../store/byClubId/byPlayerId/challenge/actions';

const withChallenges = WrappedComponent => {
    class Container extends Component {
        componentDidMount() {
            this.props.fetchChallenges();
        }

        componentDidUpdate(prevProps) {
            if (prevProps.playerId !== this.props.playerId ||
                prevProps.filter !== this.props.filter
            ) {
                this.props.fetchChallenges();
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }

    Container.propTypes = {
        fetchChallenges: PropTypes.func.isRequired,
        filter: PropTypes.string.isRequired,
        playerId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
    };

    const mapDispatchToProps = (dispatch, ownProps) => ({
        fetchChallenges: () => dispatch(fetchChallenges(ownProps.playerId, ownProps.filter))
    });

    return connect(null, mapDispatchToProps)(Container);
};

export default withChallenges;
