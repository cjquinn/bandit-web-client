import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { deleteMatch, fetchMatch } from '../../store/byClubId/byPlayerId/match/actions';

// Components
import Loading from '../../components/shared/Loading';
import Match from '../../components/match/Match';

// Selectors
import { getIsDeleting, makeGetMatch } from '../../store/byClubId/byPlayerId/match/selectors';
import { getUserId } from '../../store/shared/selectors';

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
        const { deleteMatch, isDeleting, match, userId } = this.props;

        if (!match) {
            return <Loading />;
        }

        return (
            <Match
                handleClickCancel={deleteMatch}
                isDeleting={isDeleting}
                match={match}
                userId={userId}
            />
        );
    }
}

MatchContainer.propTypes = {
    deleteMatch: PropTypes.func.isRequired,
    fetchMatch: PropTypes.func.isRequired,
    isDeleting: PropTypes.bool.isRequired,
    match: PropTypes.object,
    matchId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
};

const makeMapStateToProps = () => {
    const getMatch = makeGetMatch();

    return (state, props) => ({
        isDeleting: getIsDeleting(state, props),
        match: getMatch(state, props),
        userId: getUserId(state)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMatch: () => dispatch(deleteMatch(ownProps.matchId)), 
    fetchMatch: () => dispatch(fetchMatch(ownProps.matchId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(MatchContainer);
