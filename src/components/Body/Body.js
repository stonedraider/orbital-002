import React, { Component } from 'react';
import reactCSS from 'reactcss';

import Button from '../Button';

import * as constants from '../../constants/constants.js';

class Body extends Component {

    constructor(props) {
        super(props);

        this.onSwitchStyle = this.onSwitchStyle.bind(this);
    }
    render() {
        console.log(this.state);

        const themeId = constants.THEME_ID;

        const styles = reactCSS({
            'black': {
                Body: {
                    background: 'black',
                },
            },
            'white': {
                Body: {
                    background: 'white',
                },
            },
        }, {
                'black': this.props.themeId === themeId.BLACK,
                'white': this.props.themeId === themeId.WHITE,
            });

        return (
            <div className="Body" style={styles.Body}>
                <Button
                    className="btn btn-default active"
                    onClick={() => this.onSwitchStyle(themeId.BLACK)}
                >
                    Black Theme
          </Button>
                <Button
                    className="btn btn-default active"
                    onClick={() => this.onSwitchStyle(themeId.WHITE)}
                >
                    White Theme
          </Button>
            </div >
        );
    }

    onSwitchStyle(themeId) {
        this.props.switchTheme({
            themeId: themeId
        });
    }
}

export default Body;