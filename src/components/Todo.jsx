import React, { useState } from 'react';

const Todo = ({ todo,setTodoList ,setTodocopy}) => {
  

  return (
    <div className="w-full h-12 py-4 px-2  gap-2 border-b-2 bg-white flex items-center">
      <div className="w-full  flex-[0.1] flex items-center jusitfy-center">
        <button type="button" className={`w-5 h-5   rounded-full  relative flex items-center  p-[3px] justify-center  ${todo.selected ?"bg-gradient-to-t from-[#5f69d7] to-[#f47871]":"border-[2px]"}`} onClick={() => {
                setTodoList(prev => {
                  const index = prev.findIndex(todoselected => todoselected.id === todo.id);
                  if (index !== -1) {
                      const updatedTodo = { ...prev[index], selected: !todo.selected };
                      const updatedList = [...prev.slice(0, index), updatedTodo, ...prev.slice(index + 1)];
                      return updatedList;
                  }
                  return prev;
              });
              setTodocopy(prev => {
                  const index = prev.findIndex(todoselected => todoselected.id === todo.id);
                  if (index !== -1) {
                      const updatedTodo = { ...prev[index], selected: !todo.selected };
                      const updatedList = [...prev.slice(0, index), updatedTodo, ...prev.slice(index + 1)];
                      return updatedList;
                  }
                  return prev;
              });
                  }} >
            {todo.selected && <img src="icon-check.svg" className="w-full h-full cursor-pointer" />}
        </button>                         
      </div>
      <div className="w-full  flex-1 flex items-center jusitfy-center">
          <span type="text" className={`w-full h-full flex-1 text-[#9fa0ac] outline-none ${todo.selected ? "line-through" : ""}`} >{todo.text}</span>                         
      </div>
      <div onClick={() => {
    setTodoList(prev => {
        return prev.filter(todoselected => todoselected.id !== todo.id);
    });
    setTodocopy(prev => {
        return prev.filter(todoselected => todoselected.id !== todo.id);
    });

}} className="w-full flex-[0.1] flex items-center justify-center">
    <img src="icon-cross.svg" className='cursor-pointer' alt="" />
</div>

      
    </div>
  );
};

export default Todo;
