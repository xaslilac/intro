export interface RenderInput {
	x: number;
	y: number;
	t: number;
}

export interface RenderOutput {
	color: string;
	activation: number;
}

// Rainbow gradient
// export function render(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const color = `hsl(${(((x + y + t * 10) / 53) * 360).toPrecision(5)}, 100%, 50%)`;
// 	return { color, activation: 1 };
// }

// Monochrome gradient
// export function render(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const luminance = ((((x - y + t * 10) / 53) * 100) % 100).toPrecision(5);
// 	const color = `hsl(0, 0%, ${luminance}%)`;
// 	return { color, activation: 1 };
// }

// Monochrome gradient v2
// export function render(input: RenderInput): RenderOutput {
// 	const { x, y, t } = input;
// 	const position = (((x - y + t * 10) / 53) * 100) % 200;
// 	const luminance = position > 100 ? 200 - position : position;
// 	const color = `hsl(0, 0%, ${luminance.toPrecision(5)}%)`;
// 	return { color, activation: 1 };
// }

// Pink uwu
export function render(input: RenderInput): RenderOutput {
	const { x, y, t } = input;
	const position = (((x + y + t * 10) / 53) * 100) % 100;
	const luminance = position > 50 ? 100 - position : position;
	const color = `hsl(309, 100%, ${(luminance + 20).toPrecision(5)}%)`;
	return { color, activation: 1 };
}
