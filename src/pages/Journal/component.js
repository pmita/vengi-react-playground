import React from 'react';
import './style.scss';
// import components
import JournalShowcase from '../../featured/JournalShowcase';

const component = () =>
{
    return (
	<section className="journal-section">
		<h1>Latest Happenings</h1>
		<JournalShowcase />
	</section>
    );
};

export default component;
