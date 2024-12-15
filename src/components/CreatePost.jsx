const CreatePost = () => {
    const handleNavigate = () => {
        window.open("https://syncraft.dev/wp-admin", "_blank");
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-2">CREATE NEW ARTICLE</h2>
          <p className="text-sm text-gray-600">
            Create new post in WordPress site for the Flutter app
          </p>
        </div>
        <button
          onClick={handleNavigate}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          POSTS
        </button>
      </div>
    );
  };
  
  export default CreatePost;
  