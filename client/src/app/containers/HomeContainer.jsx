import React from 'react';

import Header from "../components/HeaderComponent";

export default class HomeContainer extends React.Component {
	render() {

		return(
			<div>
				<Header heading="Title" />
				<section className="container-fluid">
					<div className="content-section">
						<div className="row">
                            <div className="col-sm-12">
								<div>Home</div>
							</div>
						</div>
					</div>
				</section>
			</div>

		);
	}
}

