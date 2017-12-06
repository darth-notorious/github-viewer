import React from 'react';
import PropTypes from 'prop-types';

import { Glyphicon } from 'react-bootstrap';

import styles from './styles.scss';

export default class Loader extends React.Component {

    static propTypes = { pageHeader: PropTypes.string };

    render() {
        return ( <div
            className={ styles.wrapper }
        >
            <Glyphicon
                className={ styles.loader }
                glyph='refresh'
            />
        </div> );
    }

}