import React from 'react';
import PropTypes from 'prop-types';

import {
    Grid,
    PageHeader
} from 'react-bootstrap';

export default class Layout extends React.Component {

    static propTypes = { pageHeader: PropTypes.string };

    render() {
        return <Grid>
            {
                !!this.props.pageHeader && <PageHeader>
                    { this.props.pageHeader }
                </PageHeader>
            }
            { this.props.children }
        </Grid>;
    }

}