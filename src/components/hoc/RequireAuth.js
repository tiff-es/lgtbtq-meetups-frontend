import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
export default function (ComposedComponent) {
    class Authentication extends Component {
        componentDidMount() {
            if (!this.props.authenticated) {
                this.props.history.push('/loginRequired');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/loginRequired');
            }
        }
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

    return connect(mapStateToProps)(Authentication)
}