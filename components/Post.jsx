import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
function Post({ post }) {
  return (
    <div className=" bg-white my-7 border rounded-sm">
      {/* header img profilename */}
      <div className="flex items-center p-5 ">
        <img
          src={post.userImg}
          alt=""
          className="w-12 h-12 rounded-full object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{post.username}</p>
        <EllipsisHorizontalIcon className="h-8" />
      </div>
      {/* img - post */}
      <img src={post.img} alt="" className="object-cover w-full" />

      {/* buttons */}
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleOvalLeftEllipsisIcon className="btn" />
          <PaperAirplaneIcon className="btn -rotate-45" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <div className="p-5 truncate">
        <p className="font-bold mb-1">3 Likes</p>
        <span className="font-bold mr-1">{post.username}</span> {post.caption}
      </div>

      {/* comments */}

      {/* input box */}
      <form className="flex items-center p-4">
        <FaceSmileIcon className="h-7 mr-1" />
        <input
          type="text"
          className="flex-1 border-none focus:ring-0 outline-none"
          placeholder="Add a comments... "
        />
        <button type="submit" className=" font-semibold text-blue-400 ">Post</button>
      </form>
    </div>
  );
}

export default Post;
