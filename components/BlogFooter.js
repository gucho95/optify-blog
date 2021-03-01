import React from "react";
import { Icon, Link, Pagination } from "style-guide";

const BlogFooter = () => {
  return (
    <div className="flex justify-end xs:py-10">
      <nav
        className="relative z-0 inline-flex -space-x-px"
        aria-label="Pagination"
      >
        <Pagination page={1} pageCount={10} />
      </nav>
    </div>
  );
};
export default BlogFooter;
