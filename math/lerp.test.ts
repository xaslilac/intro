import { lerpClamp } from "./lerp";

test("lerpClamp", () => {
	expect(lerpClamp(0, 0, 10)).toBe(0);
	expect(lerpClamp(-1, 0, 10)).toBe(0);
	expect(lerpClamp(1, 0, 10)).toBe(10);
	expect(lerpClamp(2, 0, 10)).toBe(10);

	expect(lerpClamp(0.5, 0, 10)).toBe(5);
	expect(lerpClamp(0.5, 90, 100)).toBe(95);
	expect(lerpClamp(0.5, 100, 90)).toBe(95);
});
