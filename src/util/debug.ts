import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { createCanvas } from 'canvas';

import { Ship } from '../lib/Ship';

export const plot = (ships: Ship[], width: number, height: number) => {
    const cnv = createCanvas(width * 10, height * 10);
    const ctx = cnv.getContext('2d');

    const colors = [
        'red','green','black','pink','blue','yellow','purple','brown'
    ];
    
    let colorIdx = 0;

    for (const ship of ships) {
        const { origin, direction } = ship;
        const x = origin.x * 10;
        const y = origin.y * 10;
        const dx = Math.max(direction.x, 1) * 10;
        const dy = Math.max(direction.y, 1) * 10;
        
        ctx.fillStyle = colors[colorIdx];
        ctx.fillRect(x, y, dx, dy);

        colorIdx++;
    }

    const out = createWriteStream(resolve('grid.png'));

    cnv.createPNGStream().pipe(out);
}