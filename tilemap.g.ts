// Code généré automatiquement. Ne pas modifier.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000001010101010000000000000000000101000101010000000000000000010101010101010000000000000000010101010101000000000000000000000001010101010000000000000000000000010101010000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2], TileScale.Sixteen);
            case "labyrinthe":
            case "level3":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020302030202030302020102030202030303020303020303020101020303030302020202030202020201010202020202020303020302030303010102030303030203030202020203030101020302020202020202030302020201010203020303030203030303020303010102030203020202020203030203020101020302030203030302030302030201010203020302020203020303020302010103030203030302030203030203020101020202020203020302020202020201010203030303030203030302030303010102020202020202020202020202020101020101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . 2 . . 2 2 . . 
2 . 2 . . 2 2 2 . 2 2 . 2 2 . 2 
2 . 2 2 2 2 . . . . 2 . . . . 2 
2 . . . . . . 2 2 . 2 . 2 2 2 2 
2 . 2 2 2 2 . 2 2 . . . . 2 2 2 
2 . 2 . . . . . . . 2 2 . . . 2 
2 . 2 . 2 2 2 . 2 2 2 2 . 2 2 2 
2 . 2 . 2 . . . . . 2 2 . 2 . 2 
2 . 2 . 2 . 2 2 2 . 2 2 . 2 . 2 
2 . 2 . 2 . . . 2 . 2 2 . 2 . 2 
2 2 2 . 2 2 2 . 2 . 2 2 . 2 . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . 2 2 2 2 2 . 2 2 2 . 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight4], TileScale.Sixteen);
            case "labyrinthe1":
            case "labyrinthe1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202030202020202020102020202020202020302020202020201020203030303020203020202020201010202030202030202030202030303010102020302020302020302020302020101020203020203030403020203020201010202030202020303020202030202010102020302020203030202020302020101020203020202030302020203020201010202020202020202020202020202010102020202020202020202020202020101020203030303030303030202030301010202020202020202020202020202010102020202020202020202020202020101020201010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 . . . . . . 
2 . . . . . . . . 2 . . . . . . 
2 . . 2 2 2 2 . . 2 . . . . . 2 
2 . . 2 . . 2 . . 2 . . 2 2 2 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 2 . 2 . . 2 . . 2 
2 . . 2 . . . 2 2 . . . 2 . . 2 
2 . . 2 . . . 2 2 . . . 2 . . 2 
2 . . 2 . . . 2 2 . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight4,sprites.dungeon.doorClosedSouth], TileScale.Sixteen);
            case "labyrinthe2":
            case "labyrinthe2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010202020202020202030202020202020102020202020202020302020202020201020203030303020203020202020201010202030202030202030202030303010102020302020302020302020302020101020203020203030403020203020201010202030202020303020202030202010102020302020203030202020302020101020203020202030302020203020201010202020202020202020202020202010102020202020202020202020202020101020203030303030303030202030301010202020202020202020202020202010102020202020202020202020202020101020201010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 . . . . . . 
2 . . . . . . . . 2 . . . . . . 
2 . . 2 2 2 2 . . 2 . . . . . 2 
2 . . 2 . . 2 . . 2 . . 2 2 2 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 . . 2 2 . 2 . . 2 . . 2 
2 . . 2 . . . 2 2 . . . 2 . . 2 
2 . . 2 . . . 2 2 . . . 2 . . 2 
2 . . 2 . . . 2 2 . . . 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 . . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLight4,sprites.dungeon.doorClosedSouth], TileScale.Sixteen);
            case "niveau1":
            case "niveau1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "piecesecrete1":
            case "piecesecrete1":return tiles.createTilemap(hex`100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000108080809090700000000000000000002090909090906000000000000000000020909090909060000000000000000000209090909090600000000000000000002090909090906000000000000000000020a090909090600000000000000000003040404040405000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 . . . . . . . 2 . . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundCenter,sprites.dungeon.doorOpenNorth], TileScale.Sixteen);
            case "entrée pyramide":
            case "level1":return tiles.createTilemap(hex`1000100008080808080808080808080808080808080808080808080808080808080808080808080808080806080808080808080808080808080806060608080808080808080808080806060606060808080808080808080806060606060606080808080808080806060606060606060608080808080806060606060606060606060808080806060606060606060606060606080806060606090a0b0c0d0e0f0606060608060606060606030504060606060606060606060606060301020606060606060607070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.stairNorth,sprites.dungeon.floorDark5,sprites.dungeon.floorDark1,sprites.dungeon.floorLightMoss,sprites.dungeon.doorOpenNorth,myTiles.tile4,sprites.castle.tilePath5,myTiles.tile3,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "brique pyramide":
            case "tile4":return tile4;
            case "myTile1":
            case "tile3":return tile3;
            case "eau":
            case "tile5":return tile5;
            case "serpent rouge":
            case "tile8":return tile8;
            case "serpent vert":
            case "tile6":return tile6;
            case "serpent vert0":
            case "tile9":return tile9;
            case "piece":
            case "tile7":return tile7;
            case "gantt":
            case "tile10":return tile10;
            case "brique pyramide D":
            case "tile11":return tile11;
            case "brique pyramide I":
            case "tile12":return tile12;
            case "brique pyramide S":
            case "tile13":return tile13;
            case "brique pyramide N":
            case "tile14":return tile14;
            case "brique pyramide E":
            case "tile15":return tile15;
            case "brique pyramide Y":
            case "tile16":return tile16;
            case "brique pyramide0":
            case "tile17":return tile17;
        }
        return null;
    })

}
// Code généré automatiquement. Ne pas modifier.
