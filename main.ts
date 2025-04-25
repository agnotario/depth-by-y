//% weight=100 color=#0fbc11 icon="\uf247"
//% block="Depth By Y"
//% block.loc.es="Profundidad según Y"
namespace depthByY {
    let spritesToSort: Sprite[] = []
    let zOffsets: { [id: number]: number } = {}
    let sortingEnabled = true

    /**
     * Enable or disable automatic sorting by Y
     * @param active true to enable sorting, false to disable it
     */
    //% block="enable depth sorting $active"
    //% block.loc.es="activar orden por profundidad $active"
    export function setSortingEnabled(active: boolean) {
        sortingEnabled = active
    }

    /**
     * Register a sprite to be automatically sorted by its Y position
     * @param sprite the sprite to include in sorting
     */
    //% block="sort sprite $sprite by Y"
    //% block.loc.es="ordenar sprite $sprite por Y"
    export function addSprite(sprite: Sprite) {
        if (spritesToSort.indexOf(sprite) === -1) {
            spritesToSort.push(sprite)
        }
    }

    /**
    * Register a sprite with a custom Z offset for depth sorting
    * @param sprite the sprite to include
    * @param offset additional Z offset for fine-tuning
    */
    //% block="sort sprite $sprite by Y with offset $offset"
    //% block.loc.es="ordenar sprite $sprite por Y con $offset"
    export function addSpriteWithOffset(sprite: Sprite, offset: number) {
        if (!sprite || typeof sprite.id !== "number") return
        zOffsets[sprite.id] = offset
        addSprite(sprite)
    }

    /**
    * Set or update the Z offset for a registered sprite
    * @param sprite the sprite to update
    * @param offset new Z offset value
    */
    //% block="set Z offset of $sprite to $offset"
    //% block.loc.es="ajustar desplazamiento Z de $sprite a $offset"
    export function setZOffset(sprite: Sprite, offset: number) {
        if (!sprite || typeof sprite.id !== "number") return
        zOffsets[sprite.id] = offset
    }
    
    /**
    * Remove all registered sprites from sorting
    */
    //% block="clear sorted sprites"
    //% block.loc.es="limpiar sprites ordenados"
    export function clearSprites() {
        spritesToSort = []
        zOffsets = {}
    }

    function getZOffset(sprite: Sprite): number {
        return zOffsets[sprite.id] || 0
    }
    
    function compareByY(a: Sprite, b: Sprite): number {
        const ay = a.y + getZOffset(a)
        const by = b.y + getZOffset(b)
        return ay - by
    }

    game.onUpdate(function () {
        if (!sortingEnabled) return
        spritesToSort.sort(compareByY)
        for (let i = 0; i < spritesToSort.length; i++) {
            spritesToSort[i].z = i
        }
    })
}