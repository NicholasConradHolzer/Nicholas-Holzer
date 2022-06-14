import React, {useState} from 'react';
import ProjMod from '../components/ProjMod';

const Projects = () => {

	const [projectsArr] = useState([
		{
			name: '',
			github: '',
			image: '',
			live: '',
			description: ''
		},
		{
			name: '',
			github: '',
			image: '',
			live: '',
			description: ''
		},
		{
			name: '',
			github: '',
			image: '',
			live: '',
			description: ''
		}
	]);

	const projects = [];
	for(let i = 0; i < projectsArr.length; i++) {
		projects.push(<ProjMod key={`Project-${i}`} project={projectsArr[i]}/>)
	}

	return (
		<main className="h-auto mx-3 sm:mx-8 my-5 grid grid-cols-1 md:grid-cols-2 justify-center p-5 border-4 rounded-lg border-slate-500">
			{projects}
		</main>
	);
}

export default Projects;