const posts = [
  {
    id: "1",
    username: "puzzle",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "2",
    username: "second",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "3",
    username: "third",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "4",
    username: "forth ",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "5",
    username: "fiveth",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "6",
    username: "one ",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "v",
    username: "two",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
  {
    id: "8",
    username: "three",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz_90H9v0IBP_OZdSgJuiGOjqU-tWFiCAA&usqp=CAU",
    caption: "this is caption",
  },
];
import Post from './Post';
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.div} post={post}/>
      ))}
    </div>
  );
}

export default Posts;
