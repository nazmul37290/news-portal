import { useLocation } from "react-router-dom";
import { addToLocalStorage } from "../localStorage";
import toast, { Toaster } from "react-hot-toast";

const ArticleDetails = () => {
  const { state } = useLocation();

  // function for add to favorites using local storage
  const handleAddToFavorite = (article) => {
    addToLocalStorage("favorite-articles", article);
    // show toast using react hot toast
    toast.success("Added to favorites");
  };
  return (
    <div>
      {/* toaster for showing react hot toast */}
      <Toaster />
      {/* details card */}
      <div className="shadow-md mt-4 p-5">
        <img className="w-full " src={state?.urlToImage} alt="" />
        {/* article details  */}
        <div className=" md:p-4">
          {/* article information container */}
          <div className="flex flex-col md:flex-row gap-2 justify-between mb-4">
            <p>
              <span className="font-medium">Published at:</span>{" "}
              {state?.publishedAt}
            </p>
            <p>
              <span className="font-medium">Author:</span>
              {state?.author}
            </p>
            <button
              onClick={() => handleAddToFavorite(state)}
              className="font-medium btn btn-sm bg-blue-900 text-white"
            >
              Add to Favorite
            </button>
          </div>
          {/* article title */}
          <h2 className="text-2xl font-bold mb-2">{state?.title}</h2>
          {/* article description */}
          <p>{state?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
