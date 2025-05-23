# DepthByY

Automatically sort sprite layers in MakeCode Arcade based on their Y position to simulate depth in top-down or isometric games.

Ordena automáticamente los sprites en MakeCode Arcade según su posición Y para simular profundidad en juegos con vista cenital o isométrica.


![Demo](docs/demo.gif)

---

## 🌟 Features / Características

- ✅ Auto-sorts sprites by Y coordinate
- ➕ Supports custom `zOffset` per sprite
- 🔄 Enable/disable sorting dynamically
- 🧹 Block to clear all registered sprites
- 🧩 Fully block-based, MakeCode Arcade compatible


## 🎮 Use cases / Casos de uso

- RPGs or adventure games (top-down view)
- Town or farming games (e.g. Stardew Valley-like)
- Characters walking behind/under buildings or trees
- Decorative layers with depth control (e.g. shadows, effects)


## 🧱 Blocks / Bloques

| Block | Description |
|-------|-------------|
| ![Block1](docs/Block1.png) | Add a sprite to auto-sorting by Y |
| ![Block1](docs/Block2.png) | Add a sprite to auto-sorting calculate its offset based on the bottom of the hitbox |
| ![Block1](docs/Block3.png) | Add sprite with manual depth offset |
| ![Block1](docs/Block4.png) | Change the Z offset for a sprite |
| ![Block1](docs/Block5.png) | Turn sorting on/off |
| ![Block1](docs/Block6.png) | Reset all sorting |


🛠 `Tip:` If your sprites have different sizes or their collision box is not aligned to the center, consider using "sort sprite by bottom" to get the most accurate visual depth.

🛠 'Consejo:' Si tus sprites tienen tamaños diferentes o su caja de colisiones no está alineada al centro, considera usar "ordenar sprite por su base" para lograr una profundidad visual más precisa.


## 🧪 Example / Ejemplo

![Block1](docs/Example.png)

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


## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/agnotario/prueba** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/agnotario/prueba** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

