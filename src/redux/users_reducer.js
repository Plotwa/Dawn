const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS'
let initialState = {
  users: [
    { name: 'Andrey',photoUrl:'https://www.rewizor.ru/files/238346ks54.jpg',
    followed:true, id: 1,status:'Cherryboy', location:{city:'Kursk',country:'Russsia'} },
   { name: 'Egor', photoUrl:'https://www.rewizor.ru/files/238346ks54.jpg',
   followed:false, id: 2,status:'Soplya', location:{city:'Kishinev',country:'Moldovia'} },
   { name: 'Vanya', photoUrl:'https://www.rewizor.ru/files/238346ks54.jpg',
   followed:false, id: 3,status:'Kachok', location:{city:'Tula',country:'Russia'} },
   { name: 'Nastya', photoUrl:'https://www.rewizor.ru/files/238346ks54.jpg',
   followed:true, id: 4,status:'Perfect', location:{city:'Pripyat',country:'Ucrain'} },   
  ],
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
  return{...state,users:[...state.users,...action.users]}
default:
  return state;
}
}
export const followAC = (userid) => ({type:FOLLOW,userid});
export const unfollowAC=(userid)=>({type:UNFOLLOW,userid});
export const setUsersAC=(users)=>({type:SET_USERS,users});

export default usersReducer;
