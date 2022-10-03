import { useRouter } from "next/router";
import { getPosts } from "../../api/getPosts";
import { Post as PostContainer } from "../../components";

const Post = ({ post }) => {
  const router = useRouter();
  const { id } = router.query;
  console.log("Id: ", id);
  return <PostContainer />;
};

export async function getStaticPaths() {
  const { posts } = await getPosts();
  const paths = posts.map((post) => ({ params: { id: post.sys.id } }));
  console.log("Paths: ", paths);
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const { posts } = await getPosts();
  const post = posts.find((post) => post.sys.id === id);
  return {
    props: { post },
  };
}

export default Post;
