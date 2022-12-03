import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ScreenProps {
	children?: ReactNode;
}

interface ScreenContext {
	readonly width: number;
	readonly height: number;
}

const ScreenContext = createContext<ScreenContext>({
	get width() {
		return window.innerWidth;
	},
	get height() {
		return window.innerHeight;
	},
});

export function useScreen() {
	return useContext(ScreenContext);
}

export function Screen(props: ScreenProps) {
	const { children } = props;

	const [value, setValue] = useState(() => ({
		width: window.innerWidth,
		height: window.innerHeight,
	}));

	useEffect(() => {
		const onResize = () => {
			setValue({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>;
}
