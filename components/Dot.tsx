import * as React from "react";

import * as styles from "./Dot.module.scss";

interface DotProps {
	frame: number;
	color: string;
	activation: number;
}

export function Dot(props: DotProps) {
	const { activation, color } = props;

	return (
		<svg viewBox="0 0 6 6" className={styles.dot}>
			<circle cx="3" cy="3" r="3" fill={color} />
		</svg>
	);
}
