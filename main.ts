//% weight=100 color=#0fbc11 icon="object-group"
//% block="Profundidad Y"
namespace depthByY {
    let spritesToSort: Sprite[] = []

    /**
     * Registra un sprite para ordenarse automáticamente por su posición Y.
     * @param sprite el sprite a ordenar
     */
    //% block="ordenar sprite $sprite por Y"
    export function addSprite(sprite: Sprite) {
        if (spritesToSort.indexOf(sprite) === -1) {
            spritesToSort.push(sprite)
        }
    }

    /**
     * Elimina todos los sprites registrados.
     */
    //% block="limpiar sprites ordenados"
    export function clearSprites() {
        spritesToSort = []
    }

    function compareByY(a: Sprite, b: Sprite): number {
        return a.y - b.y;
    }

    game.onUpdate(function () {
        spritesToSort.sort(compareByY);
        for (let i = 0; i < spritesToSort.length; i++) {
            spritesToSort[i].z = i;
        }
    })
}