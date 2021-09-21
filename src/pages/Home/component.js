import React from 'react';
import './style.scss';
// import our components
import Banner from '../../featured/Banner';
// import assets
import bannerImg from '../../assets/images/bannerImg.png';

const component = () =>
{
    return (
	<div>
		<Banner 
			bannerTitleOne='Elegance'
			bannerTitleTwo='Comfort'
			bannerText='Our new Range of overcoats made from 100% 
			cashmere, ethically sourced and without the 
			price tage of old fashion houses.'
			bannerImage={bannerImg}
			bannerLink='/women'
		/>
	</div>
    );
};

export default component;
