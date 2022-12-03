import { Extent, Point, rect } from "./geometry";

test("rect", () => {
	const origin = Point(1, 1);
	const dimensions = Extent(5, 12);

	expect(rect({ x: 0, y: 0, t: 0 }, origin, dimensions)).toBe(false);
	expect(rect({ x: 1, y: 1, t: 0 }, origin, dimensions)).toBe(true);

	expect(rect({ x: 5, y: 1, t: 0 }, origin, dimensions)).toBe(true);
	expect(rect({ x: 6, y: 1, t: 0 }, origin, dimensions)).toBe(true);
	expect(rect({ x: 7, y: 1, t: 0 }, origin, dimensions)).toBe(false);

	expect(rect({ x: 1, y: 12, t: 0 }, origin, dimensions)).toBe(true);
	expect(rect({ x: 1, y: 13, t: 0 }, origin, dimensions)).toBe(true);
	expect(rect({ x: 1, y: 14, t: 0 }, origin, dimensions)).toBe(false);

	expect(rect({ x: 6, y: 13, t: 0 }, origin, dimensions)).toBe(true);
	expect(rect({ x: 7, y: 13, t: 0 }, origin, dimensions)).toBe(false);
	expect(rect({ x: 6, y: 14, t: 0 }, origin, dimensions)).toBe(false);
	expect(rect({ x: 5, y: 12, t: 0 }, origin, dimensions)).toBe(false);
});
