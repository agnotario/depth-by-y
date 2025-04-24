//% weight=100 color=#0fbc11 icon="clone"
//% block="profundidad Y"
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

    game.onUpdate(function () {
        spritesToSort.sort((a, b) => a.y - b.y)
        spritesToSort.forEach((sprite, index) => {
            sprite.z = index
        })
    })
}
