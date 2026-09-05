# SPEC-F01 — Contraste

Status: implementado e validado localmente. Evidências em `TASKS-F01-contraste.md`. Sem deploy.
Projeto: 3 D Pinturas — LEVEL 1. Escopo: somente F01 da auditoria.

## Problema e objetivo

Corrigir contraste de texto e dos indicadores de foco existentes, mantendo identidade, estrutura, dimensões, breakpoints e integrações. Fonte: `../../../context/DISCOVERY_AUDIT.md`, seção 11, e autorização explícita desta etapa.

## Requisitos e critérios de aceite

- AC01: texto normal alterado com contraste >= 4,5:1; títulos grandes >= 3:1. Considerar hover, opacidade e extremos dos gradientes, sem arredondar para aprovar.
- AC02: indicadores de foco customizados alterados distinguíveis dos fundos adjacentes, referência >= 3:1. Não implementar as demais melhorias F08.
- AC03: preservar cores de identidade quando possível: verde do WhatsApp, tons terrosos e fundo claro. Não mudar layout, HTML, links, conteúdo, formulário ou arquitetura.
- AC04: executar typecheck, script lint existente e build de produção; revisar diff, CSS estrutural e contrastes antes/depois. Documentar limitações de validação visual, se houver.
- AC05: nenhuma dependência, commit, push ou deploy. Nenhum F03–F17 implementado.

## F02 — BLOCKED

**BLOCKED — aguardando fotografias reais fornecidas pelo cliente.** Informação confirmada pelo responsável. Não gerar imagens, usar stock, inventar projetos, remover estrutura existente nem implementar portfólio definitivo. O ajuste de contraste dos gradientes atuais pertence exclusivamente a F01.

Quando os assets chegarem: verificar autorização de uso, privacidade, seleção de trabalhos reais, next/image, dimensões, aspect ratio, sizes, otimização, responsividade, alt text, LCP e CLS. F02 não integra os critérios de conclusão de F01.

## Segurança / dados / exclusões

Sem impacto em API, dados, armazenamento, URLs ou segredos. Preservar handler e proteção de links externos. F03–F17 e alterações gerais de Blueprint/documentação estão fora do escopo; estes documentos são apenas o registro proporcional de F01/F02 solicitado.

## Referências

- [WCAG 2.2, contraste de texto 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- [WCAG 2.2, contraste não textual 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

Não declarar conformidade WCAG global a partir desta correção localizada. Aparência de foco 2.4.13 é AAA, não exigência AA desta SPEC.
