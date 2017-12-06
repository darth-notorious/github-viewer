import React from 'react';
import PropTypes from 'prop-types';
import {
    Accordion,
    Badge,
    Glyphicon,
    Panel
} from 'react-bootstrap';

export default class RepositoriesList extends React.PureComponent {

    static propTypes = { repositories: PropTypes.array.isRequired };

    static defaultProps = { repositories: Array.prototype };

    render() {
        return ( <Accordion>
            {
                this.props.repositories.map(
                    repo => ( <Panel
                        header={ repo.full_name }
                        eventKey={ repo.id }
                        key={ repo.id }
                    >
                        {
                            repo.fork && <div>
                                <Glyphicon
                                    glyph='cutlery'
                                />&nbsp;fork
                            </div>
                        }
                        <div>
                            <Glyphicon
                                glyph='star'
                            />&nbsp;{ repo.stargazers_count }
                        </div>
                        <div>
                            Forks <Badge>{ repo.forks_count }</Badge>
                        </div>
                        <div>
                            Issues <Badge>{ repo.open_issues_count }</Badge>
                        </div>
                        <h5>
                            { repo.description }
                        </h5>
                    </Panel> )
                )
            }
        </Accordion> );
    }

}