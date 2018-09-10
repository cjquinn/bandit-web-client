import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchMatch } from '../../store/byClubId/byPlayerId/match/actions';

// Components
import Match from '../../components/match/Match';

// Selectors
import { makeGetMatch } from '../../store/byClubId/byPlayerId/match/selectors';

class MatchContainer extends Component {
    componentDidMount() {
        this.props.fetchMatch();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.matchId !== this.props.matchId) {
            this.props.fetchMatch();
        }
    }

    render() {
        const { match } = this.props;

        if (!match) {
            return null;
        }

        return <Match match={match} />;
    }
}

MatchContainer.propTypes = {
    fetchMatch: PropTypes.func.isRequired,
    match: PropTypes.object,
    matchId: PropTypes.number.isRequired
};

const makeMapStateToProps = () => {
    const getMatch = makeGetMatch();

    return (state, props) => ({
        match: getMatch(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMatch: () => dispatch(fetchMatch(ownProps.matchId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(MatchContainer);
