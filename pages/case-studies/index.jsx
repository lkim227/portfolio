import Color 	from '../../components/utils/page.colors.util'
import ComingSoon from '../../components/sections/comingsoon'

import colors 		from '../../content/case-studies/_colors.json'
import React from 'react'

export default function CaseStudies({}) {
	return (
		<React.Fragment>	
			<Color colors={colors} />
			<ComingSoon />
		</React.Fragment>
	)
}