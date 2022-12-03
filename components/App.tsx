import React, { useEffect, useState } from "react";

import { Dot } from "./Dot";
import { render } from "../engine";

import * as styles from "./App.module.scss";

export function App() {
	const [start] = useState(() => Date.now());
	const [frame, setFrame] = useState(0);

	useEffect(() => {
		let enabled = true;

		const renderLoop = () => {
			if (!enabled) return;
			setFrame((Date.now() - start) / 1000);
			requestAnimationFrame(renderLoop);
		};

		requestAnimationFrame(renderLoop);
		return () => {
			enabled = false;
		};
	}, []);

	return (
		<div className={styles.columns}>
			{Array.from({ length: 25 }, (_, x) => (
				<div key={x} className={styles.row}>
					{Array.from({ length: 30 }, (_, y) => {
						const { color, activation } = render({ x, y, t: frame });
						return (
							<Dot
								key={`${x},${y}`}
								color={color}
								activation={activation}
								frame={frame}
							/>
						);
					})}
				</div>
			))}
		</div>
	);
}
