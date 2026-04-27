# Third-Party Licenses

This file lists every third-party software component that is bundled
into the MatViz extension package (`*.vsix`) or the headless CLI
renderer (`dist/render.js` + `dist/moyo_wasm_bg.wasm`) and that is
therefore *redistributed* with MatViz. The licenses below are
reproduced verbatim per each project's terms.

MatViz itself is licensed under the MIT License — see [LICENSE](LICENSE).

---

## three.js

- **Package**: [`three`](https://www.npmjs.com/package/three)
- **Homepage**: https://threejs.org
- **Bundled location**: linked into `dist/webview.js` and `dist/render.js`.
- **License**: MIT

```
The MIT License

Copyright © 2010-2024 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

---

## @spglib/moyo-wasm

- **Package**: [`@spglib/moyo-wasm`](https://www.npmjs.com/package/@spglib/moyo-wasm)
- **Upstream repository**: https://github.com/spglib/moyo
- **Bundled location**: `media/moyo_wasm_bg.wasm` and `dist/moyo_wasm_bg.wasm` (binary
  artifacts, ~521 KB each); JS glue linked into `dist/extension.js` and
  `dist/render.js`.
- **License**: MIT OR Apache-2.0 (dual). MatViz redistributes under the
  MIT terms reproduced below.

```
MIT License

Copyright (c) 2023 Kohei Shinohara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

The Apache-2.0 alternative is available at
https://github.com/spglib/moyo/blob/main/LICENSE-APACHE for users who
prefer that license under the dual-license terms.

---

## Acknowledgments

MatViz's symmetry detection is powered by **moyo**, a modern
crystallographic symmetry analyzer authored by Kohei Shinohara as part
of the [spglib](https://spglib.github.io) project. The 3D rendering
pipeline is built on **Three.js** by mrdoob and the three.js authors.
Both are foundational pieces of work and are gratefully acknowledged.
