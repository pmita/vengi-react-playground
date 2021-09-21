import React from 'react';
import './style.scss';

const component = () => 
{
    return (
	<nav>
		<ul className="navbar-left">
			<li>
				<h2 className="logo">Vengi</h2>
			</li>
			<li>
				<a href="#">
					Mens
				</a>
			</li>
			<li>
				<a href="#">
					Mens
				</a>
			</li>
			<li>
				<a href="#">
					Journal
				</a>
			</li>
			<li>
				<a href="#">
					About us
				</a>
			</li>
		</ul>
		<ul className="navbar-right">
			<li>
				<h4 className="navbar-search">Search</h4>
			</li>
			<li>
				<h4 className="navbar-items">Items<span className="items-counter">0</span></h4>
			</li>
		</ul>
	</nav>
    );
};

export default component;
