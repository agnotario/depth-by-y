//% weight=100 color=#0fbc11 icon="object-group"
//% block="Profundidad Y"
namespace depthByY {
    let spritesToSort: Sprite[] = []
    let ordenacionActiva = true

    //% block="activar ordenación por Y $activa"
    export function setOrdenacionActiva(activa: boolean) {
        ordenacionActiva = activa
    }

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
     * Registra un sprite con un offset de profundidad adicional.
     * @param sprite el sprite a ordenar
     * @param offset el desplazamiento de profundidad
     */
    //% block="ordenar sprite $sprite por Y con offset $offset"
    export function addSpriteWithOffset(sprite: Sprite, offset: number) {
        sprite.data["zOffset"] = offset
        addSprite(sprite)
    }

    /**
        * Establece o cambia el offset Z de un sprite registrado.
        * @param sprite el sprite registrado
        * @param offset el nuevo offset
        */
    //% block="establecer offset Z de $sprite a $offset"
    export function setZOffset(sprite: Sprite, offset: number) {
        sprite.data["zOffset"] = offset
    }
    
    /**
     * Elimina todos los sprites registrados.
     */
    //% block="limpiar sprites ordenados"
    export function clearSprites() {
        spritesToSort = []
    }

    function compareByY(a: Sprite, b: Sprite): number {
        const ay = a.y + (a.data["zOffset"] || 0)
        const by = b.y + (b.data["zOffset"] || 0)
        return ay - by
    }

    game.onUpdate(function () {
        if (!ordenacionActiva) return
        spritesToSort.sort(compareByY)
        for (let i = 0; i < spritesToSort.length; i++) {
            spritesToSort[i].z = i
        }
    })
}