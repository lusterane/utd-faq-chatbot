import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import './CurrentScrapedSites.css';

class CurrentScrapedSites extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<div className="current-scraped-sites-wraper card-border">
					<FontAwesomeIcon
						className="refresh-button"
						onClick={this.refreshComponent}
						icon={faSyncAlt}
					/>
					<div>
						<b>Current Scraped Sites</b>
					</div>
					<div>
						<a href="https://utdallas.edu/covid/response/faq/">
							https://utdallas.edu/covid/response/faq/
						</a>
					</div>
					<div>
						<a href="https://registrar.utdallas.edu/faq/">
							https://registrar.utdallas.edu/faq/
						</a>
					</div>
					<div>
						<a href="https://www.utdallas.edu/counseling/faq/index.html">
							https://www.utdallas.edu/counseling/faq/index.html
						</a>
					</div>
					<div>
						<a href="https://www.utdallas.edu/housing/faq/">
							https://www.utdallas.edu/housing/faq/
						</a>
					</div>
					<div>
						<a href="https://www.utdallas.edu/services/transit/parkfaq/">
							https://www.utdallas.edu/services/transit/parkfaq/
						</a>
					</div>
					<div>
						<a href="https://cs.utdallas.edu/admissions/admissions-faq/">
							https://cs.utdallas.edu/admissions/admissions-faq/
						</a>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default CurrentScrapedSites;
