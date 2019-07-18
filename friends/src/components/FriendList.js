import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import {getFriends} from '../actions';




class FriendList extends React.Component {
    
    componentDidMount(){
        this.props.getFriends();
    }
    
    render () {
        return (
            <div>
                {this.props.fetchingData && (
                    <p>Loading...</p>
                )}
                {this.props.friends && (this.props.friends.map(
                    (friends, id) => 
                    <Friend key= {id} friends = {friends}/>))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friend: state.friend
    }
}

export default connect (mapStateToProps, {}) (FriendList);