import React from 'react';
import { Link } from 'react-router-dom'; // importing our router modules
import './style.scss';

const component = ({
    itemsCounter = 0
}) => 
{
    return (
	<nav>
		<ul className="navbar-left">
			<li>
				<Link to='/'>
					<h2 className="logo">Vengi</h2>
				</Link>
			</li>
			<li>
				<Link to='/men'>
					Men
				</Link>
			</li>
			<li>
				<Link to='/women'>
					Women
				</Link>
			</li>
			<li>
				<Link to='/journal'>
					Journal
				</Link>
			</li>
			<li>
				<Link to='/aboutus'>
					About Us
				</Link>
			</li>
		</ul>
		<ul className="navbar-right">
			<li>
				<h4 className="navbar-search">Search</h4>
			</li>
			<li>
				<h4 className="navbar-items">Items<span className="items-counter">{itemsCounter}</span></h4>
			</li>
		</ul>
	</nav>
    );
};

export default component;
