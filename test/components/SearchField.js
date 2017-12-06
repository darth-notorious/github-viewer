import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import {
    Alert,
    Button,
    FormControl,
} from 'react-bootstrap';

import SearchField from '../../src/components/SearchField';

// unit tests for the SearchField component
describe( 'SearchField component', () => {

    it( 'handles `change` event', () => {
        const wrapper = shallow( <SearchField/> );
        const testValue = 'test';
        const event = {
            target: {
                value: testValue,
            },
        };
        wrapper.find( FormControl ).simulate( 'change', event );
        const value = wrapper.find( FormControl ).prop( 'value' );
        assert.equal( value, testValue );
    } );

    it( 'shows error notice for empty queries', () => {
        const wrapper = shallow( <SearchField/> );
        wrapper.find( Button ).simulate( 'click' );
        assert.equal( wrapper.find( Alert ).length, 1 );
    } );

    it( 'calls `onSearch` handler', () => {
        let onSearchCallCount = 0;
        const wrapper = shallow( <SearchField
            onSearch={ () => onSearchCallCount++ }
        /> );
        const testValue = 'test';
        const event = {
            target: {
                value: testValue,
            },
        };
        wrapper.find( FormControl ).simulate( 'change', event );
        wrapper.find( Button ).simulate( 'click' );
        assert.equal( onSearchCallCount, 1 );
    } );

    it( 'passes query to `onSearch` handler', () => {
        let onSearchCalledWith = null;
        const wrapper = shallow( <SearchField
            onSearch={ query => onSearchCalledWith = query }
        /> );
        const testValue = 'test';
        const event = {
            target: {
                value: testValue,
            },
        };
        wrapper.find( FormControl ).simulate( 'change', event );
        wrapper.find( Button ).simulate( 'click' );
        assert.equal( onSearchCalledWith, testValue );
    } );

} );