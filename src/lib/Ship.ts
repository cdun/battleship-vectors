import { Box2D } from './Box2D';
import { Vector2 } from './Vector2';

export class Ship {
    readonly origin: Vector2;
    readonly direction: Vector2;
    readonly bounds: Box2D;

    constructor(origin: Vector2, direction: Vector2) {
        this.origin = origin;
        this.direction = direction;
        this.bounds = new Box2D(
            this.origin,
            Vector2.add(this.origin, this.direction)
        )
    }

    debug() {
        const { origin: o, direction: d } = this;
        return `Origin: ${o.x}, ${o.y} - Direction: ${d.x}, ${d.y}`;
    }

    intersects = (other: Ship) => {
        return this.bounds.intersects(other.bounds);
    }
}