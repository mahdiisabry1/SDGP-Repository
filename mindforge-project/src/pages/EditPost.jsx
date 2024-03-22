import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import NavBar from "../components/NavBar";
import { HiXCircle } from "react-icons/hi";
import axios from "axios";
import { URL } from "../url";

const EditPost = () => {
  const { id: postId } = useParams();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(UserContext);
  const [cat, setCat] = useState("Tech");
  const [cats, setcats] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + postId);
      setTitle(res.data.title)
      setDesc(res.data.desc)
      setFile(res.data.file)
      setcats(res.data.categories)

    } catch (error) {
      console.log(error);
    }
  };

  const handleupdate = async(e) => {
    e.preventDefault();
    const post = {
      title,
      desc,
      username: user.username,
      userId: user._id,
      categories: cats,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("img", filename);
      data.append("file", file);
      post.photo = filename;

      try {
        const imgUpload = await axios.post(URL + "/api/upload", data);
        console.log(imgUpload.data);
      } catch (error) {
        console.log(error);
      }
    }

    //Upload post
    try {
      const res = await axios.put(URL + "/api/posts/"+postId, post, {
        withCredentials: true,
      });
      navigate("/posts/post/" + res.data._id);
    } catch (error) {
      alert("Cannot create post login before trying again")
      console.log(error);
      navigate("/")
    }

    // Check if required fields are filled out
    if (title.trim() === "" || desc.trim() === "") {
      alert("Title and Description are required!");
      return;
    }

    // Check minLength for description
    if (desc.trim().length < 200) {
      alert("Description must be at least 200 characters long!");
      return;
    }
  };


  useEffect(()=>{
    fetchPosts()
  }, [postId])

  const addCategory = () => {
    let updatedCats = [...cats];
    updatedCats.push(cat);
    setCat("Tech");
    setcats(updatedCats);
  };

  const deleteCategory = (i) => {
    let updatedCats = [...cats];
    updatedCats.splice(i, 1);
    setcats(updatedCats);
  };

  return (
    <>
      <NavBar />
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold mt-36">
          Edit your post
        </h1>
        <form action="" className="">
          <div className="flex flex-col gap-4 justify-between">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Title"
              required
              id="title"
              className=""
            />
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 mt-5">
            <label htmlFor="file">upload a Image</label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              className="flex-1"
              id="file"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-4 md:space-x-8">
              <input
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                type="text"
                className="mt-5 flex-1"
                placeholder="Enter post Keywords"
              />
              <div
                onClick={addCategory}
                className=" mt-5 p-2 bg-black text-white cursor-pointer"
              >
                ADD
              </div>
            </div>
            <div className="flex h-6">
              {cats?.map((c, i) => (
                <div
                  key={i}
                  className="flex justify-center items-center space-x-2 mr-4"
                >
                  <p>{c}</p>
                  <p
                    onClick={() => deleteCategory(i)}
                    className="text-gray-700 rounded-xl hover:text-red-500 cursor-pointer"
                  >
                    <HiXCircle />
                  </p>
                </div>
              ))}
            </div>

            <textarea
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              name=""
              id=""
              cols="30"
              rows="15"
              className="px-4 py-4 outline-none mt-5"
              required
              minLength={200}
            ></textarea>
            <button onClick={handleupdate} className="mt-5 bg-black w-full text-white hover:bg-slate-500">
              Edit post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPost;
