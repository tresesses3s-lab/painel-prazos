# Painel de Prazos

Agenda de prazos, tarefas e delegação a partir do **DJEN** — Diário de Justiça
Eletrônico Nacional do CNJ.

**Abrir:** https://SEU-USUARIO.github.io/painel-prazos/
*(o endereço aparece em Settings → Pages depois de publicar)*

---

## O que faz

- Lê as publicações de qualquer OAB direto na API pública do DJEN — grátis, sem login, sem token
- Separa **prazo interno** (quando começar) de **prazo fatal** (a data do ato), contando em dias úteis
- Marca **PERDEU** quando o fatal passou sem nada registrado
- Exporta para o **Google Agenda** e para `.ics`, com alerta na antecedência e na véspera
- Cadastro de equipe e delegação de tarefas — inclusive para quem não é advogado
- Agenda por quinzena, tarefas por mês, placar com níveis e conquistas
- Opcional: **time compartilhado** via Firestore (plano gratuito do Firebase)

## Como funciona

Página estática, sem servidor de aplicação. A consulta ao DJEN sai do **navegador
de quem usa**, com o IP dessa pessoa — este site apenas entrega o arquivo.

Os dados de cada pessoa ficam no `localStorage` do navegador dela. Nada é enviado
para este repositório nem para quem o hospeda.

## Privacidade

Este repositório contém **apenas o aplicativo**. Nenhum número de processo, nome
de parte ou inscrição de OAB está no código.

## Instalar como aplicativo

Abra o endereço e use *Instalar aplicativo* (Chrome/Edge) ou *Adicionar à Tela de
Início* (Safari). Funciona offline; só buscar publicações novas precisa de rede.

## Aviso

As datas são **sugestão**, contadas pela Lei 11.419/2006 (art. 4º, §§3º e 4º) e
pelo CPC (arts. 219 e 224), considerando **apenas feriados nacionais**. Feriado
forense estadual, ponto facultativo e suspensão por ato do tribunal não entram e
mudam a contagem. **Não substitui o controle de prazos do escritório.**

## Arquivos

| arquivo | o que é |
|---|---|
| `index.html` | o aplicativo inteiro |
| `manifest.webmanifest` | dados de instalação como app |
| `sw.js` | cache para funcionar offline |
| `icone.svg`, `icone-mask.svg` | ícones |
| `LEIA-ME-GITHUB.md` | como publicar e atualizar |
