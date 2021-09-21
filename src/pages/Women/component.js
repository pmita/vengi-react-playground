import React from 'react';
import './style.scss';
// import components
import Banner from '../../featured/Banner';
// import assets
import bannerImg from '../../assets/images/womenPageBanner.png';

const component = () =>
{
    return (
	<>
		<Banner
			bannerTitleOne='For Her'
			bannerTitleTwo='Her'
			bannerText='Our new Range of overcoats made from 100% 
			cashmere, ethically sourced and without the 
			price tage of old fashion houses.'
			bannerImage={bannerImg}
		/>
	</>
    );
};

export default component;
