import React from 'react';
import './style.scss';
// import components
import Banner from '../../featured/Banner';
// import assets
import bannerImage from '../../assets/images/menPageBanner.png';

const component = () =>
{
    return (
	<>
		<Banner
			bannerTitleOne='Winter'
			bannerTitleTwo='Warmth'
			bannerText='Our new Range of overcoats made from 100% 
			cashmere, ethically sourced and without the 
			price tage of old fashion houses.'
			bannerImage={bannerImage}
		/>
	</>
    );
};

export default component;
