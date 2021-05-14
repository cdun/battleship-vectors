import { Vector2 } from './Vector2';

export class Box2D {
    readonly min: Vector2;
    readonly max: Vector2;

    constructor(min: Vector2, max: Vector2) {
        this.min = min;
        this.max = max;
    }

    intersects = (box: Box2D): boolean => {
        const outside = box.max.x < this.min.x
            || box.min.x > this.max.x
            || box.max.y < this.min.y
            || box.min.y > this.max.y;

        return outside ? false : true;
    }

    contains = (box: Box2D): boolean => {
        return this.min.x <= box.min.x && box.max.x <= this.max.x
            && this.min.y <= box.min.y && box.max.y <= this.max.y;
    }
}