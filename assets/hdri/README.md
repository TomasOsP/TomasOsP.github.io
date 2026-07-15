# HDRI environment maps

Drop an equirectangular HDRI here (`.hdr` preferred, or a `.jpg`/`.png`) to give
3D models realistic image-based lighting and reflections.

Recommended (free, CC0): https://polyhaven.com/hdris
  - Good picks for product shots: "studio_small_08", "brown_photostudio_02".
  - Download the 1k or 2k .hdr (keep it small for the web).

Then enable it on a model by passing `environment` to the include:

    {% raw %}{% include model.html
         src="/assets/models/part.glb"
         environment="/assets/hdri/studio_small_08_1k.hdr"
         skybox="false"
         exposure="1.1" %}{% endraw %}
