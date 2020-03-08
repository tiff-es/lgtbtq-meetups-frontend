import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
export default function (ComposedComponent) {
    class NotAuthentication extends Component {

        PropTypes = {
            router: PropTypes.object,
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function mapStateToProps(state) {
        return {authenticated: state.users.authenticated};
    }

    return connect(mapStateToProps)(NotAuthentication)
}
