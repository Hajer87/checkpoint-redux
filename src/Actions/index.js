
      

export const addTask = (payload) => {
      return {
            type:"ADDTASK",
            payload
      }
}

export const removeTask = (payload) => {
      return {
            type:"REMOVETASK",
            payload
      }
}
export const doneTask =(payload)=> {
      return {
            type:"DONETASK",
            payload
      }
}

export const edittask=(payload)=>{
      return {
          type: "EDITTASK",
          payload
      }
}

export const filter=(payload)=>{
      return {
          type: "FILTER",
          payload
      }
}

