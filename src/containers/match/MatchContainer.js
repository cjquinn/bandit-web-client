import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { deleteMatch, fetchMatch } from '../../store/byClubId/byPlayerId/match/actions';

// Components
import Match from '../../components/match/Match';

// Selectors
import { makeGetMatch } from '../../store/byClubId/byPlayerId/match/selectors';
import { getUserId } from '../../store/shared/selectors';

class MatchContainer extends Component {
    state = {isDeleting: false};

    componentDidMount() {
        this.props.fetchMatch();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.matchId !== this.props.matchId) {
            this.props.fetchMatch();
        }
    }

    handleClickCancel = () => this.setState(
        {isDeleting: true},
        () => this.props.deleteMatch()
    );

    render() {
        const { match, userId } = this.props;
        const { isDeleting } = this.state;

        return (
            <Match
                handleClickCancel={this.handleClickCancel}
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
    match: PropTypes.object,
    matchId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired
};

const makeMapStateToProps = () => {
    const getMatch = makeGetMatch();

    return (state, props) => ({
        match: getMatch(state, props),
        userId: getUserId(state)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    deleteMatch: () => dispatch(deleteMatch(ownProps.matchId)), 
    fetchMatch: () => dispatch(fetchMatch(ownProps.matchId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(MatchContainer);
