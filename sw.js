/* Service worker do Painel de Prazos.
   Guarda o app para abrir offline. NUNCA intercepta chamada a outro domínio —
   a consulta ao DJEN e os links do Google Agenda passam direto pela rede. */
const CACHE = "painel-prazos-v13";
const ARQUIVOS = ["./", "./index.html", "./manifest.webmanifest", "./icone.svg", "./icone-192.png", "./icone-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;   // DJEN, Google Fonts, Google Agenda: direto
  if (e.request.method !== "GET") return;

  /* As telas-widget são o mesmo index.html com ?w=agenda, ?w=todo, ?w=avisos.
     Sem ignorar a query, cada atalho da tela inicial seria um endereço novo,
     fora do cache — e abriria em branco sem internet. */
  if (e.request.mode === "navigate") {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true })
        .then(r => r || fetch(e.request).catch(() => caches.match("./index.html")))
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const copia = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
      return resp;
    }).catch(() => caches.match("./index.html")))
  );
});
