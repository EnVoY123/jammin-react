import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class SearchResult extends Component {
    render(){
        return(
            <Row>
                <Col xs={4}>
                    <img src={this.props.image} alt={this.props.username}/>
                    <button>Contact me!</button>
                </Col>
                <Col xs={8}>
                    <h3>{this.props.name} {this.props.surname}</h3>
                    <p><FontAwesome name="rocket"/> {this.props.location} Location </p>
                    <p><FontAwesome name="rocket"/> {this.props.playedWith} Played with </p>
                    <p>{this.props.about}about</p>
                    <Row>
                        <Col xs={6}>
                            <h4>Music I play</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur, at culpa deleniti, dolorum earum est ex, itaque nobis nostrum obcaecati officia quas qui quibusdam quidem quis quos sequi sint</p>
                        </Col>
                        <Col xs={6}>
                            <h4>Musical influences</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti doloremque eveniet excepturi libero minus nihil odio optio quod reiciendis sequi! Amet aspernatur natus nemo obcaecati, quo repellendus reprehenderit rerum unde.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default SearchResult;