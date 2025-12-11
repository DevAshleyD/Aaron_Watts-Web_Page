import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Video Production Intern',
				place: 'Prince Georges Community Telivision',
				timePeriod: '2023',
				description: (
					<ul>
						<li>
							Recorded Talent during a concert performance and Behind the Scenes 
							footage of the team meetings, rehearsals, workout sessions and
							 interviews leading up to it.{' '}
							
						</li>
						<li>
							Organized and catalogued the recorded footage for the editing team.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Awards',
		items: [
			{
				title: 'Short Film',
				place: 'The Communicators Awards',
				timePeriod: '2024',
				description: (
					<ul>
						<li>
							Produced a short film.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Arts in Journalism',
				place: 'Morehouse College',
				timePeriod: '2020 - 2024',
				description: 'Relevant Coursework: Intro to Television, Multimedia and Visual Storytelling',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Aaron Watts,  I'm a pending graduate of Morehouse College.     
					</p>
					<p>
						My major is <strong>Journalism</strong> in {' '}
						<strong>Sports, Culture, and Social Justice.</strong> 
					</p>
					<p>
						I'm a videographer, editor, and stop-motion animator. 
						And I hope to use my skills to tell other people's stories, 
						whether on television or the big screen.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
