# DepthByY

Automatically sort sprite layers in MakeCode Arcade based on their Y position to simulate depth in top-down or isometric games.

Ordena automáticamente los sprites en MakeCode Arcade según su posición Y para simular profundidad en juegos con vista cenital o isométrica.

---

![Demo](docs/demo.gif)

---

## 🌟 Features / Características

- ✅ Auto-sorts sprites by Y coordinate
- ➕ Supports custom `zOffset` per sprite
- 🔄 Enable/disable sorting dynamically
- 🧹 Block to clear all registered sprites
- 🧩 Fully block-based, MakeCode Arcade compatible

---

## 🎮 Use cases / Casos de uso

- RPGs or adventure games (top-down view)
- Town or farming games (e.g. Stardew Valley-like)
- Characters walking behind/under buildings or trees
- Decorative layers with depth control (e.g. shadows, effects)

---

## 🧱 Blocks / Bloques

| Block | Description |
|-------|-------------|
| `sort sprite [sprite] by Y` | Add a sprite to auto-sorting by Y |
| `sort sprite [sprite] by bottom` | Add a sprite to auto-sorting calculate its offset based on the bottom of the hitbox |
| `sort sprite [sprite] by Y with offset [number]` | Add sprite with manual depth offset |
| `set Z offset of [sprite] to [number]` | Change the Z offset for a sprite |
| `enable depth sorting [true/false]` | Turn sorting on/off |
| `clear all sorted sprites` | Reset all sorting |


🛠 `Tip:` If your sprites have different sizes or their collision box is not aligned to the center, consider using "sort sprite by bottom" to get the most accurate visual depth.

🛠 'Consejo:' Si tus sprites tienen tamaños diferentes o su caja de colisiones no está alineada al centro, considera usar "ordenar sprite por su base" para lograr una profundidad visual más precisa.

---

## 📦 Installation / Instalación

Paste the following URL into **Extensions** in MakeCode Arcade:

Pega esta URL en **Extensiones** en MakeCode Arcade:

```
[https://github.com/agnotario/depthByY](https://github.com/agnotario/depth-by-y)
```

---

## 🧪 Example / Ejemplo

```ts
let player = sprites.create(img`...`, SpriteKind.Player)
let tree = sprites.create(img`...`, SpriteKind.Object)
player.setPosition(80, 100)
tree.setPosition(80, 60)

depthByY.addSprite(player)
depthByY.addSpriteWithOffset(tree, 5)
```

💡 Now the player appears in front of or behind the tree depending on Y.

💡 Ahora el jugador aparece delante o detrás del árbol según su posición Y.

---

## 🛠 Advanced use

- You can dynamically change `zOffset` to prioritize layers visually.
- Disabling sorting temporarily lets you freeze sprite order for cutscenes or effects.
- Useful when using tilemaps + sprites that overlap.

## 🛠 Uso avanzado

- Puedes cambiar `zOffset` en tiempo real para modificar la profundidad visual.  
- Desactiva la ordenación para congelar capas en escenas, combates o efectos especiales.
- Útil cuando se utilizan tilemaps + sprites que se solapan.
---

## 📜 **License & Contributions**  
Released under the **MIT License**, allowing free use and modification. Contributions are welcome—fork the repository and submit a pull request.  

For issues or feedback, visit the [[issues]](https://github.com/agnotario/depth-by-y/issues) page.

---

## 🙌 Credits

Made with ❤️ using [MakeCode Arcade](https://arcade.makecode.com/)
