import React from 'react';
import PropTypes from 'prop-types';

import {
    Media,
    Glyphicon
} from 'react-bootstrap';

const profileData = [
    {
        icon: 'envelope',
        fieldName: 'email',
    }, {
        icon: 'map-marker',
        fieldName: 'location',
    }, {
        icon: 'user',
        fieldName: 'followers',
    }
];

export default class Profile extends React.PureComponent {

    static propTypes = { user: PropTypes.object.isRequired };

    render() {
        const user = this.props.user;

        return (
            <div
                style={ { marginBottom: 15 } }
            >
                <Media>
                    <Media.Left>
                        <img
                            width={ 120 }
                            height={ 120 }
                            src={ user.avatar_url }
                            alt={ user.login }
                        />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>
                            { user.name }
                        </Media.Heading>
                        {
                            profileData.map(
                                field => !!user[ field.fieldName ] && <h5
                                    key={ field.fieldName }
                                >
                                    <Glyphicon
                                        glyph={ field.icon }
                                    />
                                    &nbsp;
                                    { user[ field.fieldName ] }
                                </h5>
                            )
                        }
                    </Media.Body>
                </Media>
            </div>
        );
    }

}