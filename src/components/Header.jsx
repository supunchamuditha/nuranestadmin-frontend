const Header = () => {
    return (
      <div className="flex justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-semibold">NuraNest</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-md focus:outline-none"
          />
          <button className="p-2 rounded-md hover:bg-gray-100">
            Log Out
          </button>
        </div>
      </div>
    );
  };
  
  export default Header;
  