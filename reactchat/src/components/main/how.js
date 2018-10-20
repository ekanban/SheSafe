import React from 'react';
import pow1 from './howimages/pow1.jpeg';
import how2 from './howimages/pow3.jpeg';
import how3 from './howimages/pow2.jpeg';
import './how.css';

export default class How extends React.Component {
    state = {
		current: 1
	}
	activeClassName = (position) => {
      return position === this.state.current ? "is-active" : "";
	}
	activeblock = (position) => {
		return position === this.state.current ? {display: 'block'} : {display: 'none'}
	  }
	render() {
		const current = this.state.current;
		return(
		<div className="accordions">
		<div className="shell">
			<figure className="accordions__images">
				<img className={this.activeClassName(1)} src={pow1} alt="Howitworks 1 3aa115b9e40be944c9331b80f52554357f2e7e4f8d59509a43bafe9224d1a202"/>
				<img className={this.activeClassName(2)} src={how2} alt="Howitworks 2 9a55d07527c3326a817d373b1abfad7f037862678fe2796750c0e4870f1cbc82"/>
				<img className={this.activeClassName(3)} src={how3} alt="Howitworks 3 66b161d1192642265970a135d267c88390425f899951d2354e0fcdaf4cf7d79b"/>
			</figure>

			<div className="accordions__inner">
				<header className="accordions__head">
					<h5 className="accordions__subtitle">
						How can we help you
					</h5>

					<h2 className="accordions__title">
						Your safety.Our duty.
					</h2>
				</header>

				<div className="accordions__body">
					<div className="accordion">
						<div className="accordion__section">
							<figure className="accordion__image">
								<img src={pow1} alt="Image step 1 43b1d26acc46802481ae5c7850fe781d75b3e437e15c6af19a1cb0702c230a67"/>
							</figure>

							<div className="accordion__text">
								<div className="accordion__head">
									<h5 className={`accordion__title js-accordion-title ${this.activeClassName(1)}`}
									onMouseOver={() => this.setState({current: 1})}>
										<span></span>Report misconduct
									</h5>
								</div>

								<div className="accordion__body js-accordion-body" style={this.activeblock(1)}>
									<p>Report any kind of harassement or misconduct at your workplace,your home,anywhere and get advice from our team of lawyers,psychologists and advisors.</p>
								</div>
							</div>
						</div>

						<div className="accordion__section">
							<figure className="accordion__image">
								<img src={how2} alt="Image step 2 8b55c8a062d54e75113e38eb1324d13a09c6f4869f50a7450c7180a16a81ddb3"/>
							</figure>

							<div className="accordion__text">
								<div className="accordion__head">
								<h5 className={`accordion__title js-accordion-title ${this.activeClassName(2)}`}
								onMouseOver={() => this.setState({current: 2})}>
										<span></span> Travel safe
									</h5>
								</div>

								<div className="accordion__body js-accordion-body" style={this.activeblock(2)}>
									<p>
										Plan your travel route with the least possible cases of crime and feel safe.
									</p>
								</div>
							</div>
						</div>

						<div className="accordion__section">
							<figure className="accordion__image">
								<img src={how3} alt="Image step 3 8f1ba59a20870a595280a4f6105fad12f08efee92c19686161d31d409aeb8f5a"/>
							</figure>

							<div className="accordion__text">
								<div className="accordion__head">
								<h5 className={`accordion__title js-accordion-title ${this.activeClassName(3)}`}
								onMouseOver={() => this.setState({current: 3})}>
										<span></span> Stay smart.Stay safe.
									</h5>
								</div>

								<div className="accordion__body js-accordion-body" style={this.activeblock(3)}>
									<p>
Browse through premium content on developments in women safety and form networks with fellow women in our app.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)
	}
}
