import { useRouter } from "next/router";
import { Post as PostContainer } from "../../components";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return <PostContainer />;
};

export default Post;
