# TASKS-F01 — Contraste

SPEC: `SPEC-F01-contraste.md`. PLAN: `PLAN-F01-contraste.md`.

- [x] T01 — Ler auditoria, contrato e templates aplicáveis; delimitar F01.
- [x] T02 — Registrar F02 BLOCKED por dependência de fotografias reais.
- [x] T03 — Aplicar somente cores/camadas de contraste em globals.css.
- [x] T04 — Recalcular contrastes e comparar critérios 1.4.3 / 1.4.11.
- [x] T05 — Typecheck, validação existente e build de produção.
- [x] T06 — Verificar estrutura/integrações e revisar diff/segurança.
- [x] T07 — Registrar evidências finais, limitações e encerrar sem commit/push/deploy.

## Evidências de execução

- `node node_modules/typescript/bin/tsc --noEmit --incremental false`: aprovado.
- `npm run lint -- --incremental false`: aprovado; script existente executa TypeScript, não ESLint. Não foram criados novos gates, testes ou dependências.
- `npm run build`: exit 0, compilação otimizada concluída, TypeScript aprovado, três páginas estáticas geradas; rotas `/` e `/_not-found` pré-renderizadas.
- Aviso do Next: lockfile em `C:\Users\lmp-8` ignorado por estar fora do repositório. Não impediu build; nenhuma configuração foi alterada para tratá-lo, pois está fora do escopo.
- Build regenerou `next-env.d.ts` para `.next/types`; as duas referências preexistentes a `.next/dev/types` foram restauradas depois, evitando mudança residual de configuração gerada. Artefatos de build permanecem em `.next` ignorado.
- `git diff --check`: aprovado. Avisos Git de conversão futura LF/CRLF e de acesso ao ignore global não são falhas de conteúdo.
- AST CSS comparada via PostCSS já instalado: mesmos seletores, media queries e declarações fora de cores/background/outline/box-shadow/border-color/opacidade. Sem mudança geométrica.
- `app/page.tsx`, `app/layout.tsx`, `package.json` e lockfile sem diff: estrutura, conteúdo, formulário, WhatsApp, Instagram e fronteira cliente preservados.
- Smoke do build via `next start` em localhost e Chrome headless já instalado, por CDP nativo do Node; nenhuma instalação. DOM confirmou quatro cartões e cinco links externos com proteção original.
- Geometria de body/nav/main/section/article/headings/links/campos/botão/footer comparada com CSS original aplicado temporariamente no navegador: igualdade antes/depois em 320, 390, 800, 801 e 1440 px. CSS original foi removido após cada comparação; nenhum arquivo-fonte usado para a comparação foi alterado.
- Estilos computados confirmam as novas cores e as quatro camadas sobre gradientes. Após entrada Tab, foco visível confirmado no WhatsApp, botão, input e CTA Instagram; outline/sombra sólidos conforme CSS. Inspeção das capturas do hero mobile e portfólio desktop não identificou regressão visual introduzida por F01. A sobreposição do botão flutuante ao conteúdo durante rolagem é comportamento estrutural preexistente, não alterado.
- Segurança: diff apenas visual, sem dados, secrets, destinos ou handler novos. A revisão de dependências da auditoria permanece referência; não houve alteração de dependências que justificasse novo audit. Não há testes/formatter separados configurados. Não executados envios externos, teste de entrega do WhatsApp ou auditoria WCAG integral.

## Contrastes antes/depois

Luminância relativa sRGB conforme WCAG, composição alfa calculada antes da luminância. Números exibidos arredondados a duas casas; aceitação feita sem arredondamento. Cores computadas conferidas no Chrome. Para gradientes, limites conservadores de todo o intervalo (10.001 posições interpoladas por cartão), não alegações sobre o pixel exato atrás de cada letra. Todos os canais dos extremos variam monotonicamente; o extremo claro é o pior caso. Camada preta de 50% e opacidade do span de 90% consideradas. Nenhum título, dimensão ou opacidade de span mudou.

| Elemento / par | Antes | Depois | Referência |
|---|---:|---:|---|
| WhatsApp normal | 1,98:1 | 9,21:1 | Texto >= 4,5 |
| WhatsApp hover | 2,47:1 | 7,38:1 | Texto >= 4,5 |
| Eyebrow sobre papel | 2,22:1 | 5,96:1 | Texto >= 4,5 |
| Eyebrow sobre extremo mais escuro do hero | 1,74:1 | 4,65:1 | Limite conservador >= 4,5 |
| Placeholder sobre branco | 4,08:1 | 5,29:1 | Texto >= 4,5 |
| Instagram hover dourado sobre branco | 2,42:1 | 6,49:1 | Texto >= 4,5; somente cor, F15 intacto |
| Projeto 1, span, mínimo do gradiente | 1,47:1 | 4,86:1 | Texto >= 4,5 |
| Projeto 2, span, mínimo do gradiente | 3,33:1 | 8,47:1 | Texto >= 4,5 |
| Projeto 3, span, mínimo do gradiente | 1,86:1 | 5,80:1 | Texto >= 4,5 |
| Projeto 4, span, mínimo do gradiente | 3,04:1 | 8,02:1 | Texto >= 4,5 |
| Projeto 1, branco opaco, mínimo | 1,53:1 | 5,54:1 | Small >= 4,5; H3 grande >= 3 |
| Projeto 2, branco opaco, mínimo | 3,70:1 | 10,00:1 | Small >= 4,5; H3 grande >= 3 |
| Projeto 3, branco opaco, mínimo | 1,98:1 | 6,69:1 | Small >= 4,5; H3 grande >= 3 |
| Projeto 4, branco opaco, mínimo | 3,36:1 | 9,44:1 | Small >= 4,5; H3 grande >= 3 |
| Outline botão sobre papel | 1,30:1 | 5,96:1 | Indicador >= 3 |
| Outline Instagram sobre papel | 1,25:1 | 5,96:1 | Indicador >= 3 |
| Sombra de foco dos campos sobre papel | 1,11:1 | 5,96:1 | Indicador >= 3 |
| Outline WhatsApp sobre papel | 1,27:1 | 16,76:1 | Indicador >= 3 |

Foco dourado novo sobre branco = 6,49:1 e sobre extremo do hero = 4,65:1. Borda de campo focado usa o mesmo dourado, com 6,49:1 contra interior branco e 5,96:1 contra exterior papel. O WhatsApp ganhou faixa branca interna de 4 px mais outline ink de 3 px com offset de 4 px: branco/ink = 18,26:1, permitindo distinguir o indicador também sobre cartões escuros. O par antigo contra papel não descreve todos os fundos possíveis do botão fixo; a solução dupla evita depender de um único fundo.

## Encerramento

F01 implementado exclusivamente em CSS; critérios de contraste local atendidos nas cores avaliadas. Layout e comportamento preservados nas verificações realizadas. Isso não certifica acessibilidade total do site, todos os browsers ou todos os estados possíveis.

**F02 permanece BLOCKED — aguardando fotografias reais fornecidas pelo cliente.** Estrutura existente intacta, nenhum asset gerado/stock ou projeto inventado. F03–F17 (todos P2/P3) não implementados. Não houve commit, push ou deploy. Aguardar nova autorização.
