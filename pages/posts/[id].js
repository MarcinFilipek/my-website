import { getPosts } from "../../api/getPosts";
import { Post as PostContainer } from "../../components";

const Post = ({ post }) => (
  <PostContainer postFields={post.fields} createdAt={post.sys.createdAt} />
);

export async function getStaticPaths() {
  const { posts } = await getPosts();
  const paths = posts.map((post) => ({ params: { id: post.sys.id } }));
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
