// Core packages
// import Image from 'next/image'
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
// import SectionGridBg from '../../blocks/section.grid.block'
// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I'm currently a software engineer at MaxRetail.
							My areas of interest include problem-solving, cloud infrastructure, machine learning, and IoT.
							With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/my-team.png" alt="Lucas Team photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Boxby"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy='`Boxby is a project I built along with my team of 5 people in RMIT ITS Hackathon 2019. 
							The theme was "An Equal Community", which led to the idea of building a platform that caches the internet and provides an isolated offline version. 
							The name Boxby was inspired by The Box from the TV series Silicon Valley.`'
						/>
						<BadgesBlock 
							title="Purpose of the project" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy='`Similar inventions to Boxby were built to solve the problem of social equality however, most of them were unsuccessful1. 
							Despite the cheap price, such devices can not be considered useful if they provide no consequential benefit to the community.
							By learning from the areas in which others have failed, we believe that limited education resource is the core problem which leads to social inequality. 
							The Internet is the most powerful tool to help people to achieve better educational outcomes, however many areas and countries face limited to no internet connection with their devices. 
							Rural areas in Australia are also known to face similar issues2.`'
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]