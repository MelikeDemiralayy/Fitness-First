import { useParams } from "react-router-dom";
import blogCardData from "../../data/blogData";

const DetailCard = () => {
  const { id } = useParams();
  const blogPost = blogCardData.find((post) => post.id === parseInt(id));

  if (!blogPost) {
    return <div>Post not found</div>;
  }

  const { title, text, fullText } = blogPost;

  return (
    <div className="detail-card">
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="full-text">
        <p>{fullText}</p>
      </div>
    </div>
  );
};

export default DetailCard;
