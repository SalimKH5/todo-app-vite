
import { useState } from 'react'
import Todo from './components/Todo'

function App() {


  const [todoList,setTodoList]=useState([])
  const [todocopy,setTodocopy]=useState([])

  const [valueTodo,setValueTodo]=useState("");

  const [switchThemes,setSwitchThemes]=useState(false)


  const handleCreateTodo=()=>{
    if(valueTodo!==""){
        setTodoList((prev)=>[...prev,{text:valueTodo,id:prev.length+1,selected:false}]);

        setTodocopy((prev)=>[...prev,{text:valueTodo,id:prev.length+1,selected:false}])
        setValueTodo("")
    }else{
      alert("please write a todo item")
    }
  }


 

  return (
    <div className={`w-full  h-auto min-h-screen relative ${switchThemes? "bg-[#161722]":"bg-[#f8e9e9]"} `}>
        <div className={`w-full h-[30vh] sm:h-[50vh]  ${switchThemes?"background-dark-mobile lg:background-dark":"background-light-mobile lg:background-light"} absolute top-0`}></div>
              <div className="w-full h-full flex items-center justify-center px-8 py-8 lg:py-2">
                          <div className="w-full max-w-md h-full z-50">
                                    <div className="w-full h-full  flex flex-col  lg:py-24 gap-3">
                                            <div className="w-full flex-[0.3]  flex items-center justify-between">
                                                    <h1 className='text-2xl 2xl:text-4xl font-bold tracking-wider uppercase text-white'>Todo</h1>
                                                    {
                                                   switchThemes?
                                                   <img onClick={()=>setSwitchThemes((prev)=>!prev)} src="icon-sun.svg" alt=""  className='cursor-pointer w-6 h-6 2xl:w-8 2xl:h-8'/>:
                                                   <img onClick={()=>setSwitchThemes((prev)=>!prev)} src="icon-moon.svg" alt=""  className='cursor-pointer w-6 h-6 2xl:w-8 2xl:h-8'/>
                                                    }
                                                    
                                                    
                                            </div>
                                            <div className="w-full flex-[1]  flex flex-col gap-8">
                                                 <div className="w-full h-12 px-2 py-2 gap-3 rounded-md bg-white flex items-center">
                                                        <button onClick={handleCreateTodo} type="text" style={{background:"hsl(235, 19%, 35%)"}} className='w-5 h-5 rounded-full border-2 relative p-1' >
                                                              {/* <img src="src\assets\icon-check.svg"   className='w-full h-full  '/> */}
                                                        </button>
                                                        <input onChange={(e)=>setValueTodo(e.target.value)} 
                                                        placeholder='write a task'
                                                        value={valueTodo} type="text" className="w-full h-full flex-1 outline-none" />
                                                  </div>
                                                  <div className="w-full flex max-h-[40vh]  flex-col overflow-y-auto">
                                                   {
                                                    todoList?.map((todo)=>(
                                                      <Todo todo={todo} setTodoList={setTodoList} setTodocopy={setTodocopy}/>
                                                    ))
                                                   }
                                                   </div>
                                                    <div className="w-full text-[#9fa0ac] h-12 px-2 py-4 gap-3 border-b-2 bg-white flex items-center justify-between">
                                                         <div className="">
                                                             {todoList.length} items left
                                                         </div>
                                                         <ul className='hidden lg:flex  list-none items-center gap-3'>
                                                              <li className='cursor-pointer' onClick={()=>{
                                                                setTodoList(todocopy);
                                                              }}>All</li>                                                          
                                                              <li
                                                              className='cursor-pointer'
                                                                onClick={()=>{
                                                                  setTodoList(todocopy);
                                                                  setTodoList((prev)=>{
                                                                    return prev.filter((todo)=>todo.selected===false)
                                                                  })
                                                                }}
                                                                >
                                                                Active</li>                                                          
                                                              <li 
                                                              className='cursor-pointer'
                                                              onClick={()=>{
                                                                setTodoList(todocopy);
                                                                setTodoList((prev)=>{
                                                                  return prev.filter((todo)=>todo.selected===true)
                                                                })
                                                              }}
                                                              
                                                              >Completed</li>   
                                                         </ul>
                                                         <button onClick={()=>{setTodoList([]);setTodocopy([])}} className="">
                                                             Clear Completed
                                                         </button>
                                                    </div>
                                            </div>
                                            <ul className="w-full list-none h-12 px-2 py-4 gap-3 border-b-2 bg-white flex lg:hidden  items-center justify-center ">
                                                      <li>All</li>                                                          
                                                      <li>Active</li>                                                          
                                                      <li>Completed</li>                                                          
                                            </ul>
                                            </div>
                                    </div>

                          </div>

              
        </div>
 
  )
}

export default App
