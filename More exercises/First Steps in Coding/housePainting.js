function housePainting(input) {
    let height = Number(input[0]);
    let sideWallLength = Number(input[1]);
    let triangleWallHeight = Number(input[2]);

    let sideWall = sideWallLength * height;
    let window = 1.5 * 1.5;
    let backWall = height * height;
    let sideWalls = (2 * sideWall) - (2 * window);
    let entrance = 1.2 * 2;
    let frontAndBack = (2 * backWall) - entrance;
    let totalWalls = sideWalls + frontAndBack;
    let greenPaint = totalWalls / 3.4;

    let roofRectangles = 2 * (height * sideWallLength);
    let roofTriangles = 2 * (height * triangleWallHeight / 2)
    let totalRoof = roofRectangles + roofTriangles;
    let redPaint = totalRoof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["10.25", "15.45", "8.88"]);