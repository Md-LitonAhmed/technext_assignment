export default function TaskActions({ onAddClick }) {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          onClick={onAddClick}
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Add Task
        </button>
        <select
          name="Sort"
          className="block w-80% cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
        >
          <option>Select Sort Type</option>
          <option value="">Sort By Name</option>
          <option>Sort By Email</option>
          <option>Sort By Company Name</option>
        </select>
      </div>
    </div>
  );
}
