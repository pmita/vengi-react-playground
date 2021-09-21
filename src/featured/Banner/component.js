import React from 'react';
// import styles
import './style.scss';
import { Link } from 'react-router-dom';

const component = ({
	bannerTitleOne = 'Sample Title Vol.1',
	bannerTitleTwo = 'Sample Title vol.2',
	bannerText = 'Sample Text goes here',
	bannerImage,
	bannerLink
}) => 
{
    return (
	<section className="banner-section">
		<div className="banner-left">
			<h1>{bannerTitleOne} <br />& {bannerTitleTwo}</h1>
			<p>
				{bannerText}
			</p>
		</div>
		<div className="banner-right">
			<img src={bannerImage} alt="depiction of our model as part of the banner section" />
			{bannerLink ? <Link to={bannerLink}>See more here</Link> : ''}
		</div>
	</section>
    );
};

export default component;
