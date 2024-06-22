import { useLocation } from "react-router-dom";
import { addToLocalStorage } from "../localStorage";
import toast, { Toaster } from "react-hot-toast";

const ArticleDetails = () => {
  const { state } = useLocation();
  console.log(state);

  const handleAddToFavorite = (article) => {
    addToLocalStorage("favorite-articles", article);

    toast.success("Added to favorites");
  };
  return (
    <div>
      <Toaster />
      <div className="shadow-md mt-4 p-5">
        <img className="w-full " src={state?.urlToImage} alt="" />
        <div className="p-4">
          <div className="flex justify-between mb-4">
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
          <h2 className="text-2xl font-bold mb-2">{state?.title}</h2>
          <p>{state?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
