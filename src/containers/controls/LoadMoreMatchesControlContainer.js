import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchMoreMatches } from '../../store/byClubId/byPlayerId/match/actions';

// Components
import LoadMoreControl from '../../components/controls/LoadMoreControl';

// Selectors
import { makeGetHasMore, getIsFetching } from '../../store/byClubId/byPlayerId/match/selectors';

class LoadMoreMatchesControlContainer extends Component {
    handleClick = () => this.props.fetchMoreMatches();

    render() {
        const { hasMore, isFetching } = this.props;

        return (
            <LoadMoreControl
                handleClick={this.handleClick}
                hasMore={hasMore}
                isFetching={isFetching}
            />
        );
    }
}

LoadMoreMatchesControlContainer.propTypes = {
    fetchMoreMatches: PropTypes.func.isRequired,
    hasMore: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired
};

const makeMapStateToProps = () => {
    const getHasMore = makeGetHasMore();

    return (state, props) => ({
        hasMore: getHasMore(state, props),
        isFetching: getIsFetching(state, props)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchMoreMatches: () => dispatch(fetchMoreMatches(ownProps.playerId))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(LoadMoreMatchesControlContainer);
