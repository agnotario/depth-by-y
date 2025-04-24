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
| `sort sprite [sprite] by Y with offset [number]` | Add sprite with manual depth offset |
| `set Z offset of [sprite] to [number]` | Change the Z offset for a sprite |
| `clear all sorted sprites` | Reset all sorting |
| `enable depth sorting [true/false]` | Turn sorting on/off |

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

## 🛠 Advanced use / Uso avanzado

- You can dynamically change `zOffset` to prioritize layers visually.
- Disabling sorting temporarily lets you freeze sprite order for cutscenes or effects.
- Useful when using tilemaps + sprites that overlap.

Puedes cambiar `zOffset` en tiempo real para modificar la profundidad visual.  
Desactiva la ordenación para congelar capas en escenas, combates o efectos especiales.

---

## 📜 License

MIT

---

## 🙌 Credits

Made with ❤️ using [MakeCode Arcade](https://arcade.makecode.com/)
