import React from 'react';
import './Article.css'
import Content1 from "./Content1/Content1";
import Content2 from "./Content2/Content2";
import Content3 from "./Content3relationships/Content3";
import Content4 from "./Content4requirements/Content4";
import Content5 from "./Content5Users/Content5";
import Content6 from "./Content6Reg/Content6";


const Article = () => {

    return (
        <article>
            <Content1/>
            <Content2/>
            <Content3/>
            <Content4/>
            <Content5/>
            <Content6/>
        </article>
    );
};

export default Article;