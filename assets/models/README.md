# 3D models

Put interactive 3D model files here (`.glb` preferred, or `.gltf`).

Export from Fusion 360 / SolidWorks / Blender as **.glb** (single self-contained file).
Keep files reasonably small (ideally < 10 MB) so they load fast on the web.

Embed one in a project page (needs `model_viewer: true` in the front matter):

    {% include model.html src="/assets/models/your-part.glb" alt="Enclosure 3D model" %}
