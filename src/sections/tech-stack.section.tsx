import { FaVideo } from 'react-icons/fa6';
import { TbBrandAdobePremier } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Videography',
		items: [
			{
				title: 'Adobe Premier Pro',
				icon: <TbBrandAdobePremier color='rgba(255, 129, 3, 1)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
		],
	},
	{
		heading: 'Editing',
		items: [
			{
				title: 'Apple Final Cut Pro',
				icon: <FaVideo color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			// Optionally add ShadCn here
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
