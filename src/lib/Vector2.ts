import { clamp } from "./math";

export class Vector2 {
    readonly x: number;
    readonly y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public static readonly zero = new Vector2(0, 0);

    public static random(minLength: number, maxLength: number) {
        const isHorizontal = Math.random() > 0.5;
        const x = isHorizontal
            ? clamp(Math.floor(Math.random() * maxLength), minLength, maxLength)
            : 0;
        const y = isHorizontal
            ? 0
            : clamp(Math.floor(Math.random() * maxLength), minLength, maxLength);

        return new Vector2(x, y);
    }

    public static add(left: Vector2, right: Vector2) {
        return new Vector2(
            left.x + right.x,
            left.y + right.y
        );
    }
}