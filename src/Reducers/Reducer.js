


const initialState =  [
  {description:" Learn HTML && CSS",
  completed: false,
  id:1},
  {description: " Learn JS",
completed: false,
id:2},
{description: " Learn REACT",
completed: false,
id:3},
{description: " Learn REDUX",
completed: false,
id:4}

]



 const  Reducer= (state = initialState, action)=> {
  switch (action.type) {
    
    case 'ADDTASK':
      return       [...state, action.payload]

   case 'REMOVETASK':
      return state.filter((task)=>task.id!==action.payload) ;
     
    case 'DONETASK':
      return state.map((task)=>task.id===action.payload? {...task, completed: !task.completed}:task);  
     
    case 'EDITTASK': 
    return  state.map((task)=> task.id===action.payload.id? {...task, description: action.payload.description} : task)
  
   
    default:
      return state
  }
}
export default Reducer