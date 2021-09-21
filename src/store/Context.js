import React, { useState, useEffect, createContext } from 'react';
// import assets
import { mockData } from '../assets/data/MockData';

export const ProjectContext = createContext();

export const ProjectProvider = (props) => 
{
    // define our state
    const [ journalItems, setJournalItems ] = useState([]);

    // define our useEffect hooks
    useEffect(() => 
{
        setJournalItems(mockData);
    }, []);
    
return (
	<ProjectContext.Provider value={[ journalItems, setJournalItems ]}>
		{props.children}
	</ProjectContext.Provider>
    );
};
