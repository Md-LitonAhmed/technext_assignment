import { useState } from "react";

export default function AddTaskModal({onSave, onCloseClick}) {
  const [task, setTask] = useState( {
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    imageUrl:"",
    email:"",
    address:{
        city:'',
        state:''
    },
    company:{
        name:''
    }
    
  });
  const handleChange=(e)=>{
    const name=e.target.name;
    let value=e.target.value;
    if(name === 'address || company '){
        value=value.split(",")
    }
    setTask(
       {
        ...task,
        [name] : value,
       }
    )

  }
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className=" z-10 absolute top-1/4 left-1/3 mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">First Name</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="firstName"
              value={task.firstName}
              onChange={handleChange}
              id="firstName"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Last Name</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="lastName"
              value={task.lastName}
              onChange={handleChange}
              id="lastName"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Image URL</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="imageUrl"
              value={task.imageUrl}
              onChange={handleChange}
              id="imageUrl"
              
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Email</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="email"
              value={task.enail}
              onChange={handleChange}
              id="email"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Address</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="address"
              value={task.address}
              onChange={handleChange}
              id="address"
              required
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Company Name</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="company"
              value={task.company}
              onChange={handleChange}
              id="company"
              required
            />
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
        <button
          onClick={onCloseClick}
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
           Close
          </button>

          <button
          onClick={()=>onSave(task)}
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
           Save
          </button>
        </div>
      </form>
    </>
  );
}
