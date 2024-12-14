const testInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

const problemInput = `....#.................#......................#..........................#..................#....##..#...........#.................
...................................#...............................#......#..#...............................#....................
..........................#................#......##.....#.....................................#...............#..#...............
.......................................................................................................#..........................
...................#....#.........................#..............#.....#......................................................#...
.....#.........................................................................................................#..................
.........................................................#....................#..#............#................#..................
..............#...............#..................................................................#......#.........................
.........#.....#.......#......#.......................#.............#..#........#.......#............#.......#....#..#.......#....
........................#....#...............................................#...#.#.........................................#....
.........................#........................................................................#.....................#.........
.#..........#...#...............#..................#...#......#.................................#....................#.......#....
............................................................#......#.........................................................#....
.......................#...#..................#.#.............#......................#.............#..............................
............................................................................................................#.........#...........
....#..................###........#.............................#.#....................#..........#.....................#.........
................................................................................................#.......................#.#.......
..........................................................................#........#...#.................#.......#................
..........................#.#..#.#...............................................#..........#..............................#......
..............#........#.#...............#............................#..........#....................................#........#.#
#..................................................................................................#...........#................#.
...............................................#........................................#.................................#.......
.....#..#......#.......#..............#........#........#...........................................................#.............
.......#..........#.......#.#...........#................#.................................................#......................
....#.....#...............#....#.......#...#.............................................................#...................#....
............................................#....#.......#................................#......#......................#.....#...
.....................#...................................#....#...........................................................#.......
..#..............................#...........#...........................#.................................#......................
........#.............................##...................#.....................#................................................
................#.#.#......#...............................................#...###.........#....#.................................
.......#.............#.............#...........#..#...............................#..................................#.....#.....#
.....#...#.......#.........................................#..............................#........................#.............#
...............................................#.....#..............................................................#.............
.........#.......................................#.......................#...........#............................................
.......................#.....#.....................................................#....................................#.........
.............................#......................#.....................#..............#..#.......................#.............
......#......................................#.......#.....................#.....#...........#..........#.....................#...
..................................................#....................#.......#....#.......#...#.................................
......................................#......#........#.....#........................................#.............#..............
#......................#.#..............#.....#.........#...............................#...............................#.........
#......#...............#.........................................................................................#..#.............
.#..............................................#.................#.......#.......................................................
...#.......#.....#.............#...................................................................................#..............
..........................#........#........#.....................................#........................#..............#..#....
.......#..........#.......#...................................................#.##.....#.#.........#....#.................#.......
..##...................#.......................................#..............#.#........#........................................
#.......#..............#...........#.....#....#....#............#........#..................................#.#.........#.........
..................#.......................................................................................................#.......
............................#.........#....................#...............................#..........#...........................
.............#.....................................................................#.....#.................#......................
...#...#............#..........................#..........................................#.......................................
..#.............#.#........................#...#.......................#.........#....................##....#.....................
...........................................................................................................#.........#...#........
.............................#.#..........................................................................................#.......
....................#........................#.#......#...............#......#.............................#......................
....#...#.......#..................#..........................................................#........................#..........
.#...........#..............................................#...........................................#.........................
..............................#...........#...........................................#.........#...........................#....#
............#.......#......#....#.......................................................................#.........................
.........................................#...#..................#..................#.....................................#........
................#..................#........#.........................#...................#......................................#
............................................................#.....#........#......................................................
..............................#............#.........................................#.............#.......#..#...................
...#............#........................................................................#..................................#....#
..............................#.......#.............#.................................................#...........................
.....#.................................................#..........#...............................#..##..........................#
.............#.........................................................#.............................#..#..............#........#.
....................#...............#................................................................................#....#......#
........#....#..#...........................................................................#................#..............#.....
....#......................#...............#..........#......#.........#..^....#..........#..................#.......#............
...........................#.#...................................................#...............................#................
#..#.........................................................#.....#........................#.....................................
.#.#....#.......................................#......#..........#................#..#...........................................
...#.....#..........#...................#.......#............................#....................................................
.............#......................................................#............#.....................#.....................#....
...................#.............................................................................................#................
...................#.....#...................................................................................................#....
................#............#......................#.......#..................#..#.....................#..............#........#.
#....#...................................................................#.......##....#..........#...............................
.........................................#............#......#.......................#........#..............#.#..................
.##........#.....#...........................................................................................#..............#.....
#...........................................................#.......#....#......#..#...................................#..#.#.....
.............#........................................#...............................#...........................................
......................#..................................................................#..................................#.....
...#.#........................................#.................................................................................#.
.............#.......................#............................#.#................................#.......#..#...........#.....
...#..#...............................................................................#................#..........................
.......#.............................#............#..#........#.....#.........................#..................#................
......#...............................................................................##.................................#....#...
........#..................#.......................................................................#......#..........#............
...........#.......#........#..........................................#........#..............#.................#.........#......
...................#..............................#...............................#.....................#.....#...................
.............#..#..................#.#..#.....#..#..........................................................................#.....
..............................#...................................................#.......................#..............#........
.......#......................#.............................#...........................#.....#...#.................#........#....
.........#.......#....##..........................................................................................................
........................................................................#......................#..................................
.......................#..........##.#................................................#..#.....#......#......#.................#..
......................................#......................................................................#....................
.....................................#....#...............................................#...#.....#.......#...#...........#.....
...................#..#................................................................................#..........................
..............#.................#..............................#..............#...........#.#..................#...#.............#
................#..#......#.........................#.....#.....#..............#..#.........................................#.....
.....#.........................#........................................#.....#.......#...........#...................#...........
......#....................##......................................................................................#..............
............................................................................###...............................#...................
#..................................#......#..............................................................................#.......#
.....#...................#.....#............................................................#.....................#...#...........
.......#......#........................#.....................#.#..##............#......#.................#.....................#..
.....#..............#.................#........#..................#..#..........................##.....#..#...................#...
........#................#................#...........#.........................................#....................#............
.........#.........#....#................#........#........#...............#....#.................................................
...........#...#............#..................#.............................#.#..#....................#.#........................
.#............#..#..#................#.#................................................................##.............#..........
...........#.......................#.........................................................#....................................
..#..........................#...........#......#................................#.#..............................................
............................................................#..................#...........#.....##.................#.............
....#.........#............................##..........................................#.....#....#..........#....................
..................#..............#........#........#....................#..............#....................#.....................
....#...................................#.....................................................#.............#...................#.
.........#...........#...#.............................#.............##..#................................................#.#.....
............................##..............#................#..#........................................#....................#...
.............................#.#......................................................##.....#..................................#.
.............................................................................#..................#...#.................#...........
........................#...........#..................#......#...................................................................
.....#.......................#......#................#............#..................#.................................#..........
#..........#...................................................................#...................#...#...............#..........
....................#............................................#...............#........................##....#..#..............
.#.....#............................#...............#.#.#..........................#.........#..............#.....................
.............................#....................................#..#......#........................#............................`

let input = problemInput;

const mapMatrix = input.split('\n').map(row => row.split(''));


function findStart(matrix){
    let row, column;
    for (let i=0; i < matrix.length; i++){
        for (let y=0; y < matrix[i].length; y++){
            if (matrix[i][y] === '^'){
                row = i;
                column = y;
            }
        }
    }
    return [row,column];
}

const startingPos = findStart(mapMatrix);

let direction = 'up';
let x = startingPos[0];
let y = startingPos[1];

const dirChanges = {
    'up': 'right',
    'right': 'down',
    'down': 'left',
    'left': 'up'
}

let positionTrack = new Set();

while (x > -1 && x < mapMatrix.length && y > -1 && y < mapMatrix[x].length){
    let ahead;
    if (direction === 'up'){
        ahead = [x - 1, y];
    } else if (direction == 'right'){
        ahead = [x, y + 1];
    } else if (direction == 'down'){
        ahead = [x + 1, y];
    } else if (direction == 'left'){
        ahead = [x,y - 1];
    }
    try {
        positionTrack.add(`${x},${y}`);
        if (mapMatrix[ahead[0]][ahead[1]] === '#'){
            direction = dirChanges[direction];
        } else {
            if (direction === 'up'){
                x -= 1;
            } else if (direction == 'right'){
                y += 1;
            } else if (direction == 'down'){
                x += 1;
            } else if (direction == 'left'){
                y -= 1;
            }
        }
    } catch {
        break;
    }

}

console.log('Starting Pos: ', startingPos, 'Position Count: ', positionTrack.size);

