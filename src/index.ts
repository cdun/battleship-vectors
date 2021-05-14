import { Box2D, Ship, Vector2 } from './lib';
import { plot } from './util/debug';

const MAX_SHIPS = 5;
const GRID_SIZE = 10;

function addShip(ships: Array<Ship>, grid: Box2D) {
    const tolerance = 500;

    for (let i = 0; i < tolerance; i++) {
        const ship = new Ship(
            Vector2.random(2, 10),
            Vector2.random(2, 10)
        );

        const collision = ships.find(other => ship.intersects(other));
        if (collision) {
            console.log('- Intersected');
            continue;
        }
        
        if (!grid.contains(ship.bounds)) {
            console.log('- Out of bounds');
            continue;
        }

        return [...ships, ship];
    }

    throw new Error('Solver exceeded maxmimum tolerance');
}

function setup() {
    const grid = new Box2D(
        Vector2.zero,
        new Vector2(GRID_SIZE, GRID_SIZE)
    );
    let ships = new Array<Ship>();

    try {
        for (let i = 0; i < MAX_SHIPS; i++) {
            ships = addShip(ships, grid);
        }
    } catch (e) {
        console.error('Failed to place')
    }

    for (const ship of ships) {
        console.log(ship.debug());
    }

    return ships;
}

function main() {
    const ships = setup();
    plot(ships, GRID_SIZE, GRID_SIZE)
}

main();