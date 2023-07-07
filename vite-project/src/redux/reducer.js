
const initialState={
    myFavorites:[],
    allCharacters: [],
};

const reducer=(state=initialState,action)=>{
  switch (action.type) {
    case "ADD_FAV":
        return  {...state, myFavorites:[...state.allCharacters, action.payload],
            allCharacters:[...state.allCharacters, action.payload]}
    case "REMOVE_FAV":
              return {
                ...state,
                allCharacters: state.allCharacters.filter(
                  (favorite) => favorite.id !== Number(action.payload)
                ),
                myFavorites: state.allCharacters.filter(
                  (favorite) => favorite.id !== Number(action.payload)
                ),
              };            
   

   case "FILTER":
       const filtrados= state.allCharacters.filter((pj)=> pj.gender === action.payload)
       return{
         ...state, myFavorites: filtrados
        };
        
        case "ORDER":
          const copy=[...state.allCharacters];
          return{
            ...state,
            myFavorites:
            action.payload === "A" ? copy.sort((a,b) => a.id - b.id) : 
            copy.sort((a,b) => b.id - a.id)
          };
          
          default:
            return{...state}
            
  };
};


export default reducer;