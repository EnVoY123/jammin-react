import React, { Component } from 'react';
import {Row} from 'react-bootstrap';


import SearchResult from './SearchResult';

class SearchResultList extends Component {

    render(){

        return(
            <Row>
                {this.props.users.length ? Object.keys(this.props.users).map((key) => {
                    return <SearchResult user={this.props.users[key]} key={key} />
                }) : <p>No results for {this.props.instrument} in {this.props.location}</p>}
            </Row>
        );
    }
}

export default SearchResultList;