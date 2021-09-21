import React, { useContext } from 'react';
// import our ProjectContext
import { ProjectContext } from '../../store/Context';
// import our components
import JournalItem from '../JournalItem';
import './style.scss';

const component = () => 
{
	// bind Context state locally
	const [ journalItems, setJournalItems ] = useContext(ProjectContext);
    
return (
	<div className="journal-content">
		{journalItems.map((item) => (
			<JournalItem 
				key={item.id}
				title={item.title}
				author={item.author}
				desc={item.description}
				paragraphs={item.paragraphs}
				catchPhrase={item.catchPhrase}
				link={item.link}
				img={item.img}
				id={item.id}
			/>
		))}
	</div>
    );
};

export default component;
