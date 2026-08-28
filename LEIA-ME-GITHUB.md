# Publicar como aplicativo (GitHub Pages)

Esta pasta é o app pronto para virar site. Publicado em HTTPS, ele **instala como
aplicativo** no celular e no notebook, e passa a abrir offline.

## Por que dá certo hospedar

A consulta ao DJEN sai do **navegador de quem usa**, não do servidor. O IP que
chega ao CNJ é o da pessoa — rede de casa ou do escritório —, então o bloqueio de
datacenter (403) **não se aplica**. O GitHub só entrega o arquivo.

## O que sobe, e o que nunca sobe

Sobe: `index.html`, `manifest.webmanifest`, `sw.js`, `icone.svg`, `icone-mask.svg`.

O `index.html` desta pasta é gerado **sem nenhum dado de cliente** — sem números
de processo, sem nomes de parte, sem OAB. Confira antes de publicar:

```bash
grep -ci "0964587\|processo n" index.html
```

Tudo o que cada pessoa cadastra fica no navegador dela. Nada volta para o
servidor, nada é compartilhado, nada aparece no repositório.

> **Nunca** suba o `painel-prazos.html` da pasta de cima num repositório público:
> aquele traz o conjunto de exemplo com dados reais dentro.

## Passo a passo

1. Crie um repositório no GitHub (pode ser **público** — só o app vai para lá).
2. Suba os arquivos **desta pasta** na raiz.
3. Settings → Pages → Source: **Deploy from a branch** → branch `main`, pasta `/ (root)` → Save.
4. Em um ou dois minutos o endereço aparece: `https://SEU-USUARIO.github.io/SEU-REPO/`.

Pelo terminal:

```bash
cd site
git init -b main
git add .
git commit -m "Painel de Prazos"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

## Instalar como aplicativo

- **Android / Chrome:** abre o endereço → menu → *Instalar aplicativo*. O painel também oferece o botão **Instalar como aplicativo** em Ajustes.
- **iPhone / Safari:** Compartilhar → *Adicionar à Tela de Início*.
- **Windows / Mac / Linux, no Chrome ou Edge:** ícone de instalar na barra de endereço, ou menu → *Instalar*.

Instalado, abre em janela própria, sem barra de navegador, e funciona sem
internet — só a busca de novas publicações precisa de rede.

## Atualizar depois

Suba o `index.html` novo e troque a versão do cache na primeira linha do `sw.js`
(`painel-prazos-v3` → `v4`). Sem isso o navegador continua servindo a versão
guardada.

## Um aviso sobre times

Cada pessoa tem os próprios dados no próprio navegador — **não há base
compartilhada**. Delegar marca o responsável na cópia de quem delegou. Para a
outra pessoa receber de fato: mande o `.ics` (entra na agenda dela) ou o e-mail
gerado pelo painel. Sincronização real exigiria servidor e banco, o que este
projeto deliberadamente não tem.
