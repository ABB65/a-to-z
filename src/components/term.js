import { Link } from 'gatsby';
import React from 'react';

const Term =  ( { term, index } )  => {
    return (
        <div className="py-10 max-w-2xl" key={index}>
        <Link to={term.frontmatter.slug}>
          <h3 className="pb-5 text-3xl text-blue font-bold">
            {term.frontmatter.title}
          </h3>
        </Link>
        <p>{term.frontmatter.description}</p>
      </div>
    );
}

export default Term