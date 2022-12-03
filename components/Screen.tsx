import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ScreenProps {
	children?: ReactNode;
}

interface ScreenContext {
	readonly width: number;
	readonly height: number;
}

export const screenPxToMatrixPx = (screenPx: number) =>
	Math.floor((screenPx - 20) / 35) + 1;

export const getMatrixDimensions = () => ({
	width: screenPxToMatrixPx(window.innerWidth),
	height: screenPxToMatrixPx(window.innerHeight),
});

const ScreenContext = createContext<ScreenContext>({
	get width() {
		return screenPxToMatrixPx(window.innerWidth);
	},
	get height() {
		return screenPxToMatrixPx(window.innerHeight);
	},
});

export function useScreen() {
	return useContext(ScreenContext);
}

export function Screen(props: ScreenProps) {
	const { children } = props;

	const [value, setValue] = useState(getMatrixDimensions);

	useEffect(() => {
		const onResize = () => {
			setValue(getMatrixDimensions);
		};

		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
}
