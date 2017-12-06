import React from 'react';
import {
    Row,
    Col,
    Thumbnail
} from 'react-bootstrap';
import { Link } from 'react-router';

export default class SearchResults extends React.PureComponent {

    render() {
        return <Row>
            {
                this.props.results ? this.props.results.map(
                    user => <Col
                        key={ user.id }
                        md={ 3 }
                        sm={ 4 }
                        xs={ 12 }
                    >
                        <Thumbnail
                            src={ user.avatar_url }
                            alt={ user.login }
                        >
                            <h5
                                style={ { textAlign: 'center' } }
                            >
                                <Link
                                    to={ `user/${ user.login }` }
                                >
                                    { user.login }
                                </Link>
                            </h5>
                        </Thumbnail>
                    </Col>,
                ) : []
            }
        </Row>;
    }

}