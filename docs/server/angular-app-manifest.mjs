
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/primerexame/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/primerexame"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TRH27VUD.js"
    ],
    "route": "/Program%20Files/Git/primerexame/contacto"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LHFXBDU5.js"
    ],
    "route": "/Program%20Files/Git/primerexame/servicios"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 913, hash: '35c025a99fbc50c45f0e6c686a85425cc2d269a9dc99ad2b7fe6cbc645b18d5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1027, hash: '09bf6bd512955efa1b2063eea64e5cbee6e6581326975b701b5d059f288973d9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-UHSYBXGJ.css': {size: 583, hash: 'Ui3j0nMPxwI', text: () => import('./assets-chunks/styles-UHSYBXGJ_css.mjs').then(m => m.default)}
  },
};
