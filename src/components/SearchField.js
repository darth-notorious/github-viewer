import React from 'react';
import PropTypes from 'prop-types';

import {
    Alert,
    Button,
    FormControl,
    FormGroup,
    InputGroup
} from 'react-bootstrap';

export default class SearchField extends React.PureComponent {

    static propTypes = { onSearch: PropTypes.func.isRequired };

    static defaultProps = { onSearch: Function.prototype };

    state = {
        query: '',
        error: '',
    };

    search = () => {
        //display error for short and empty queries
        if ( !this.state.query || this.state.query.length < 3 )
            return this.setState( { error: 'Query too short' } );

        this.props.onSearch( this.state.query );
    };

    handleChange = ev => {
        //hide error when input changes
        this.setState( {
            query: ev.target.value,
            error: '',
        } );
    };

    handleKeyPress = ev => {
        const code = ev.keyCode || ev.charCode;

        //trigger search on `Enter` key press
        if ( code === 13 )
            this.search();
    };

    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type='text'
                            placeholder='Username'
                            value={ this.state.query }
                            onChange={ this.handleChange }
                            onKeyPress={ this.handleKeyPress }
                        />
                        <InputGroup.Button>
                            <Button
                                onClick={ this.search }
                                bsStyle='success'
                            >
                                Search user
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
                {
                    !!this.state.error && <Alert
                        bsStyle='danger'
                        onDismiss={ () => this.setState( { error: '' } ) }
                    >
                        { this.state.error }
                    </Alert>
                }
            </div>
        );
    }

}