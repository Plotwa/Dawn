import React from 'react';
import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users_reducer';
import Users from './users';


let mapStateToProps =(state)=>{
    return{
        users:state.usersPage.users
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        follow:(userid)=>{
            dispatch(followAC(userid))
        },
        unfollow:(userid)=>{
            dispatch(unfollowAC(userid))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}
const UsersContainer =connect(mapStateToProps,mapDispatchToProps)(Users);
export default  UsersContainer;