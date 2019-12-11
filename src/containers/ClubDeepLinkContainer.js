import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// Actions
import { setClubId } from '../store/user/actions';

// Selectors
import { getClubId } from '../store/props/selectors';

class ClubDeepLinkContainer extends Component {
    componentDidMount() {
        this.props.setClubId();
    }

    render() {
        const { pathname } = this.props;

        return <Redirect to={pathname} />;
    }
}

ClubDeepLinkContainer.propTypes = {
    pathname: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    setClubId: PropTypes.func.isRequired
};

const mapStateToProps = (_, { location }) => ({
    pathname: location.pathname.replace(/\/clubs\/+\d/, '')
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setClubId: () => dispatch(setClubId(getClubId(null, ownProps)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClubDeepLinkContainer);
