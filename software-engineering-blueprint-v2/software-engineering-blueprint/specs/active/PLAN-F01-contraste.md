# PLAN-F01 — Contraste

SPEC: `SPEC-F01-contraste.md`.

## Estado e mudança proposta

O CSS concentra os problemas. WhatsApp branco/verde = 1,98:1; eyebrow dourado/papel = 2,22:1; placeholder/branco = 4,08:1. Texto do portfólio usa branco e span com opacidade 0,9 sobre gradientes claros. Foco usa cores translúcidas de baixo contraste.

1. Adicionar tom dourado escuro específico para texto/foco, preservando accent decorativo.
2. Usar ink no texto/ícone WhatsApp, preservando verde normal e hover.
3. Usar muted já existente nos placeholders, com opacidade explícita para consistência.
4. Sobrepor preto a 50% aos quatro gradientes existentes; preservar cores base, conteúdo, dimensões e opacidade do texto. Validar todo o intervalo de cores e composição alfa. Não é implementação F02.
5. Substituir cores translúcidas dos indicadores existentes por cores sólidas; usar foco claro/escuro no botão flutuante porque percorre fundos claros e escuros. Corrigir também texto dourado do hover Instagram, com a mesma cor acessível, sem tocar na integração F15.

## Arquivos

- Implementação: somente `app/globals.css`.
- Documentação: SPEC/PLAN/TASKS em `specs/active/`; adendo de status F02 na auditoria externa.
- Sem edição de package, lockfile, JSX, configurações ou assets.

## Validação

Calcular luminância sRGB e contraste com composição alfa; comparação de cores estáveis em normal/hover/foco e limites conservadores dos gradientes. Comparar AST CSS antes/depois para garantir que não mudaram propriedades geométricas, seletores estruturais ou media queries. Conferir fontes e integrações intactas via diff. Executar `npm run lint -- --incremental false` (script existente é typecheck), `node node_modules/typescript/bin/tsc --noEmit --incremental false` e `npm run build`. Conferir HTML de build. Não criar framework de testes ou instalar navegador.

## Segurança e reversão

Revisar diff sem mudança de fluxo, URL ou dados. Sem migração. Risco baixo, restrito à aparência das cores; gradientes ficarão mais escuros. Reverter somente o diff F01 no CSS se necessário, preservando outras mudanças. Nenhum deploy autorizado.
