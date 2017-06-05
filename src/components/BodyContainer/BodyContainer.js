import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Body from '../Body';
import Button from '../Button'

import * as SwitchThemeActions from '../../actions/switch-theme-actions';
import * as constants from '../../constants/constants.js';

class BodyContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }
    render() {
        
        const { themeId } = this.props;

        console.log("state: " + this.state);
        console.log("props: " + this.props);

        return (
            <Body switchTheme={this.props.actions.switchTheme} themeId={themeId}/>
        );
    }
}

BodyContainer.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
    return {
        themeId: state.SwitchThemeReducer.themeId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(SwitchThemeActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);