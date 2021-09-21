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
		<a href={link} className="btn-link">
			Read More
		</a>
	</div>
    );
};

export default component;
