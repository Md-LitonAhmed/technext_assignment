import { useEffect, useState } from "react";
import Cart from "./Cart";
import Header from "./Header";
import TaskActions from "./TaskActions";
import AddTaskModal from "./AddTaskModal";
import ProfileView from "./ProfileView";
import Review from "./Review";

export default function TaskBoard() {
  const [persons, setPersons] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setPersons(data.users);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleSearch=(searchTerm)=>{
    console.log(searchTerm)
    const filtered=persons.filter((person)=>
    person.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setPersons([...filtered])

}
const handleModal=(newTask)=>{
  console.log(`"This is new Task" ${newTask}`)
  setPersons([...persons,newTask])

setShowTaskModal(false)
}
const handleCloseClick=()=>{
  setShowTaskModal(false)

}
const handleProfileClick=(profileId)=>{
  const newPerson=persons.find((person)=> person.id === profileId)
  console.log(newPerson)
}
  return (
    <div>
      {showTaskModal && (
        <AddTaskModal onSave={handleModal} onCloseClick={handleCloseClick}/>
      )}
      <Header onSearch={handleSearch}/>
      <div className=" pb-[114px] pt-20 md:mt-[100px]">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={()=>setShowTaskModal(true)}/>
          <div className="grid grid-cols-4 gap-2 md:grid-cols-2 ssm:grid-cols-1 xl:grid-cols-3">
            {persons.map((person) => (
              <Cart person={person} key={person.id} onProfile={handleProfileClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
