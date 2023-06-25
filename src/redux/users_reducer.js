const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS'
const SET_CURRENT_PAGE='SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOOGLE_ISFETCHING = 'TOOGLE_ISFETCHING';


let initialState = {
  users: [],
  pageSize:10,
  totalUsersCount:0,
  currentPage:1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch(action.type){
    case FOLLOW:
      return {
        ...state,
        users:state.users.map(u =>{
            if(u.id ===action.userid){
              return {...u,followed:true}
            }
          return u;
        })
      }
case UNFOLLOW:
  return {
    ...state,
    users:state.users.map(u =>{
        if(u.id ===action.userid){
          return {...u,followed:false}
        }
      return u;
    })
  }
case SET_USERS:
  return{...state,users:action.users}
case SET_CURRENT_PAGE:
  return{...state,currentPage:action.currentPage}
  case SET_TOTAL_USERS_COUNT: {
    return { ...state, totalUsersCount: action.totalUsersCount}
  }
  case TOOGLE_ISFETCHING: {
    return { ...state, isFetching: action.isFetching}
  }
  default:
  return state;
}
}
export const followAC = (userid) => ({type:FOLLOW,userid});
export const unfollowAC=(userid)=>({type:UNFOLLOW,userid});
export const setUsersAC=(users)=>({type:SET_USERS,users});
export const setCurrentPageAC=(currentPage)=>({type:SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCountAC=(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT,totalUsersCount})
export const toogleisFetchingAC=(isFetching)=>({type:TOOGLE_ISFETCHING,isFetching})

export default usersReducer;
