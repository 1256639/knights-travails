const moves = [
    [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]
];

function getValidMoves([x, y]) {
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];
    
    const validMoves = [];
    for (let i = 0; i < moves.length; i++) {
        const dx = moves[i][0];
        const dy = moves[i][1];
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
            validMoves.push([nx, ny]);
        }
    }

    return validMoves;
}

function knightMoves(start, end) {
    const queue = [[start, [start]]];
    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0) {
        const [current, path] = queue.shift();
        if (current[0] === end[0] && current[1] === end[1]) {
            return path;
        }
        for (const move of getValidMoves(current)) {
            const [x, y] = move;
            if (!visited[x][y]) {
                visited[x][y] = true;
                queue.push([move, path.concat([move])]);
            }
        }
    }
}

function displayKnightMoves(start, end) {
    const path = knightMoves(start, end);
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(pos => console.log(`[${pos[0]},${pos[1]}]`));
}

displayKnightMoves([3, 3], [4, 3]);
displayKnightMoves([0, 0], [1, 2]);
displayKnightMoves([0, 0], [3, 3]);
displayKnightMoves([0, 0], [7, 7]);
