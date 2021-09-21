import React from 'react';
import './style.scss';

const component = ({
    title,
    author,
    desc,
    paragraphs,
    catchPhrase,
    link,
    img,
    id
}) => 
{
    return (
	<div className="cardItem">
		<img src={img} alt='content relative to the article' />
		<h4 className="cardItem-name">{title}</h4>
		<p>{desc}</p>
		<h6 className="cardItem-author">Written by {author}</h6>
	</div>
    );
};

export default component;
