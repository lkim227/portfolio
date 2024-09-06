import Color 	from '../../components/utils/page.colors.util'
import ComingSoon from '../../components/sections/comingsoon'
import colors 		from '../../content/case-studies/_colors.json'

export default function CaseStudies({}) {
	return (
		<>	
			<Color colors={colors} />
			<ComingSoon />
		</>
	)
}