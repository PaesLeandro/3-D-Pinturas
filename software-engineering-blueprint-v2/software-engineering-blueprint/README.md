# Software Engineering Blueprint V2

Blueprint reutilizável para projetos profissionais conduzidos com Codex.

## Objetivo
Fornecer um sistema de engenharia independente de stack para orientar análise, especificação, arquitetura, implementação, segurança, testes, revisão e entrega.

## Princípio central
O Codex é o agente de implementação. Este Blueprint define as regras e o contexto que controlam o trabalho.

Fluxo obrigatório:

`REQUEST -> DISCOVERY -> SPEC -> PLAN -> TASKS -> IMPLEMENTATION -> TESTS -> SECURITY REVIEW -> QUALITY GATES -> DOCUMENTATION -> DELIVERY`

## Uso rápido
1. Copie esta pasta para a raiz do repositório.
2. Copie/mescle `AGENTS.md` na raiz do projeto.
3. Preencha `context/PROJECT_CONTEXT.md`.
4. Classifique o projeto em `governance/PROJECT_LEVELS.md`.
5. Para mudança relevante, crie SPEC, PLAN e TASKS em `specs/active/`.
6. Execute `scripts/validate-project.ps1` (Windows) ou `scripts/validate-project.sh`.
7. Adapte os workflows de CI à stack real.

## Regra
Não introduza tecnologia apenas porque existe neste Blueprint. Use somente controles proporcionais ao risco, stack e requisitos.
