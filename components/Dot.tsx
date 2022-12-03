import * as React from "react";

import { clamp } from "../math";

import * as styles from "./Dot.module.scss";

interface DotProps {
	color: string;
	activation?: number;
}

export function Dot(props: DotProps) {
	const { activation = 1, color } = props;

	return (
		<svg
			viewBox="0 0 6 6"
			className={styles.dot}
			style={{
				// opacity: clamp(activation, 0, 1),
				transform: `scale(${clamp(activation, 0, 1.5)})`,
			}}
		>
			<circle cx="3" cy="3" r="3" fill={color} />
		</svg>
	);
}
