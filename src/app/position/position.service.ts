import { Injectable } from '@angular/core';

export class Position {
    ID: number;
    nameActive: string;
    percentActive: string;
    colorActive: string;
}

let positions: Position[] = [{
    "ID": 1,
    "nameActive": "Fun",
    "percentActive": "60%",
    "colorActive": "#ffa600",
}, {
    "ID": 2,
    "nameActive": "Task",
    "percentActive": "25%",
    "colorActive": "#88f1bc",
}, {
    "ID": 3,
    "nameActive": "Study",
    "percentActive": "10%",
    "colorActive": "#88e5f1",
}, {
    "ID": 4,
    "nameActive": "Sport",
    "percentActive": "5%",
    "colorActive": "#d3bbf5",
}];

@Injectable()
export class Service {
    getPositions(): Position[] {
        return positions;
    }
}
