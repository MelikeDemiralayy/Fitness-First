import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import BenefitCard from "../../components/card/card";
import blogCardData from "../../data/blogData";
import "./index.css";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const totalPages = Math.ceil(blogCardData.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogCardData.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog">
      <h1>BLOG</h1>
      <BenefitCard cardData={currentCards} />
      <Pagination>
        {[...Array(totalPages).keys()].map((number) => (
          <Pagination.Item
            key={number + 1}
            active={number + 1 === currentPage}
            onClick={() => paginate(number + 1)}
          >
            {number + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Blog;
