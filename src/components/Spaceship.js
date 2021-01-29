import React, {useState} from 'react';
import classNames from 'classnames';

import './Spaceship.css';

function Spaceship({
	pointsColor,
	spaceshipName,
	spaceshipDescription,
	spaceshipPicture,
	spaceshipParts,
}) {
	const [activePart, setActivePart] = useState();
	const [showInfo, setShowInfo] = useState();

	return (
		<div className="spaceship-container">
			<img
				alt=""
				src={spaceshipPicture}
			/>

			<div className="spaceship-title">
				<h1>{spaceshipName}</h1>
				<p>{spaceshipDescription}</p>
			</div>

			<div className="spaceship-parts">
				<div className="spaceship-parts-points">
					{spaceshipParts.map((spaceshipPart, index) => (
						<div
							className="point"
							key={index}
							onMouseEnter={() => {
								setActivePart(spaceshipPart);
								setShowInfo(true);
							}}
							onMouseLeave={() => {
								setShowInfo(false);
							}}
							style={{
								left: spaceshipPart.x,
								top: spaceshipPart.y
							}}
						>
							<svg
								style={{
									fill: pointsColor
								}}
								fill-opacity="0.7"
								viewBox="0 0 120 120"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<circle cx="60" cy="60" r="50"/>
							</svg>
						</div>
					))}
				</div>

				<div className={classNames(
					'spaceship-parts-info',
					{
						'in': activePart && showInfo,
						'out': activePart && !showInfo
					}
				)}>
					{activePart && (
						<React.Fragment>
							<h2>{activePart.name}</h2>
							<p>{activePart.description}</p>
						</React.Fragment>
					)}
				</div>
			</div>
		</div>
	);
}

export default Spaceship;