# DISCOVERY AUDIT — 3 D Pinturas

> Atualização após DISCOVER, confirmada pelo responsável: **F02 — BLOCKED — aguardando fotografias reais fornecidas pelo cliente.** Não gerar imagens, usar stock, inventar projetos, remover a estrutura atual ou implementar portfólio definitivo sem os assets. Este status prevalece sobre propostas anteriores de ocultar/reformular a galeria nesta etapa; a severidade histórica P1 permanece registrada. Quando os assets chegarem, considerar autorização de uso, privacidade, seleção de trabalhos reais, next/image, dimensões, aspect ratio, sizes, otimização, responsividade, alt text, LCP e CLS. Somente F01 está autorizado para implementação, com SPEC/PLAN/TASKS em `../software-engineering-blueprint/specs/active/`. O restante deste documento preserva as evidências da auditoria original.

Data: 05/09/2026, America/Sao_Paulo. Produção consultada por HTTP em 05/09/2026, aproximadamente 23:41 UTC.

Escopo: auditoria do código próprio, configuração, documentação, dependências declaradas/resolvidas e resposta pública de https://3-d-pinturas.vercel.app/. Nenhuma recomendação implementada. Não houve instalação, refatoração, commit, push ou deploy. Este relatório é a única alteração solicitada no workspace.

Classificação: **VERIFICADO** = evidência em arquivo, comando ou resposta HTTP; **INFERIDO** = interpretação ou comportamento ainda não reproduzido; **RECOMENDADO** = proposta. Ausência de evidência não significa ausência de risco. As prioridades referem-se a achados únicos F01–F17; repetições nas seções não aumentam a contagem.

## 1. Executive Summary

**VERIFICADO:** o site publicado respondeu HTTP 200, com HTML pré-renderizado, conteúdo em português, serviços, formulário e links comerciais. O código é pequeno e compreensível. TypeScript passou sem emissão de arquivos. O npm audit completo retornou zero vulnerabilidades conhecidas na consulta.

**INFERIDO:** é uma base funcional apropriada para continuidade, mas ainda não está pronta para ser apresentada como um portfólio comercial completo. O CTA “Ver trabalhos” leva a quatro cartões sem fotografias; há falhas objetivas de contraste em elementos usados na conversão. SEO, documentação e manutenção têm lacunas tratáveis sem reconstrução.

| Prioridade | Quantidade | Achados |
|---|---:|---|
| P0 | 0 | Nenhum bloqueio crítico confirmado |
| P1 | 2 | F01 contraste; F02 portfólio sem trabalhos reais |
| P2 | 12 | F03–F14 |
| P3 | 3 | F15–F17 |

**Limites:** não houve navegador automatizado disponível entre as ferramentas e pacotes consultados, nem instalação autorizada. Não foram medidos Lighthouse, CrUX, LCP, CLS, INP, reflow visual, teclado, leitor de tela ou zoom. Não houve acesso ao painel Vercel, Search Console ou contas dos canais comerciais. Nenhuma mensagem foi enviada. O build não foi executado para preservar os artefatos existentes na etapa somente de auditoria; a entrega pública foi examinada diretamente. Não se declara aprovação de build local nem certificação de acessibilidade.

## 2. Project Classification

**VERIFICADO:** uma rota institucional com conteúdo fixo e formulário que monta uma URL do WhatsApp; não há API própria, autenticação, banco, pagamentos, persistência ou upload no código inspecionado.

**RECOMENDADO:** LEVEL 1 — Static / Landing, conforme `software-engineering-blueprint/governance/PROJECT_LEVELS.md`. O uso comercial não transforma este site em LEVEL 3, destinado a sistemas comerciais com outros riscos, como múltiplos usuários e dados críticos.

Aplicam-se acessibilidade, responsividade, SEO, performance, revisão de dependências, headers proporcionais, CI básica e recuperação simples de release. Não se justificam microserviços, autenticação, filas, banco, tracing distribuído ou infraestrutura adicional.

## 3. Blueprint Applicability

**VERIFICADO:** os 69 arquivos presentes na pasta Blueprint foram lidos, incluindo arquivos ocultos, scripts, templates, regras, contexto e checklists. Total aproximado: 31.864 bytes antes deste relatório. O `AGENTS.md` externo direciona ao contrato interno. Contexto, arquitetura, decisões e comandos ainda contêm `TBD`; `specs/active/` contém apenas `.gitkeep`.

Regras aplicáveis: inspeção anterior à mudança; evidência acima de documentação genérica; mudanças pequenas e reversíveis; não reconstruir áreas funcionando; não adicionar dependências sem motivo; validação proporcional; jamais declarar testes não executados. Segurança: entradas/saídas, dados enviados a terceiros, segredos e supply chain. Qualidade: tipagem, checagens estáticas, build e smoke do fluxo comercial quando houver implementação.

Processo para a etapa seguinte: DISCOVER → SPEC → PLAN → TASKS → IMPLEMENT → TEST → SECURITY REVIEW → QUALITY GATES → DOCS. Este documento encerra apenas DISCOVER. Os templates SPEC/PLAN/TASKS, ADR e PR são aproveitáveis; ADR só para decisão relevante, não para cada ajuste CSS. Checklists de instalação, segurança, revisão, testes e Definition of Done devem ser adaptados. Docker, OpenAPI, banco, RAG e MCP são exemplos, não requisitos deste site.

**VERIFICADO — F13:** a árvore está em `software-engineering-blueprint-v2/software-engineering-blueprint/`, com um nível adicional em relação a vários exemplos. Não há `AGENTS.md` na raiz do repositório nem workflows em `.github/workflows` da raiz. Workflows aninhados são templates, não CI ativa. O caminho solicitado para este relatório cria `context/` no nível externo; o contexto original permanece no nível interno, explicitamente sem movimentação nesta etapa.

Os validadores inspecionados verificam existência de arquivos e dois padrões de segredo dentro da própria Blueprint. Não validam a aplicação inteira; cada variante exclui somente a si mesma e pode detectar o padrão literal da outra variante. Não foram executados nem tratados como prova de segurança. **RECOMENDADO:** ajustar escopo, falsos positivos e comandos em futura integração mínima.

## 4. Technology Stack

**VERIFICADO:** versões lidas de `package-lock.json` e dos manifests locais coincidem para os pacotes abaixo. Não são versões do runtime remoto, que não foi identificado.

| Tecnologia | Versão local/resolvida | Papel |
|---|---|---|
| Next.js | 16.3.4 | App Router e build |
| React / React DOM | 19.2.8 / 19.2.8 | UI e hidratação |
| TypeScript | 7.0.2 | Tipagem |
| Tailwind CSS / PostCSS plugin | 4.3.3 / 4.3.3 | Estilos e processamento |
| Lucide React | 1.41.0 | Ícones |
| Motion | 13.2.0 | Declarado; nenhum import no código próprio |
| Node local | 24.15.0 | Runtime da auditoria |

`package-lock.json` usa formato 3, com 126 entradas incluindo o pacote raiz. Todas as dependências diretas usam `latest`. `private: true` evita publicação acidental do pacote no npm. Vercel confirmada pelo header `server: Vercel`; vínculo GitHub e versão Node de produção não foram verificados.

## 5. Project Structure

```text
app/
  layout.tsx       metadata e idioma
  page.tsx         toda a landing e submissão WhatsApp
  globals.css      estilos globais e breakpoints
components/       vazio
public/images/    vazio
package.json
package-lock.json
tsconfig.json
postcss.config.mjs
next-env.d.ts
README.md
.gitignore
software-engineering-blueprint-v2/
  AGENTS.md
  software-engineering-blueprint/   regras e templates originais
  context/DISCOVERY_AUDIT.md         esta entrega
.next/dev/        artefatos locais preexistentes, ignorados
node_modules/    dependências locais preexistentes, ignoradas
```

**VERIFICADO:** não há `next.config.*`, `vercel.json`, `.vercelignore`, configuração ESLint/Prettier ou testes no inventário próprio. Ausência de configuração Next/Vercel não é defeito por si só: defaults são apropriados quando suficientes.

## 6. Current Architecture

**VERIFICADO:** `layout.tsx` permanece Server Component. `page.tsx:1` declara `use client`; inclui navegação, hero, serviços, portfólio, contato e rodapé. A interação específica é o handler `submit`, que usa `FormData`, `encodeURIComponent` e `window.open`. A página publicada já inclui conteúdo HTML; Client Component não significa ausência de pré-renderização.

Fluxo: visitante → HTML/CSS/JS na Vercel → formulário no navegador → URL `wa.me` com mensagem preparada → usuário confirma o envio no WhatsApp. Instagram é um link externo, sem SDK, token de API ou feed incorporado.

**RECOMENDADO — F10:** considerar manter só o formulário como Client Component, preservando o restante no servidor. Não há motivo para camadas enterprise ou serviços intermediários. O ganho exato de JavaScript precisa ser medido antes/depois.

## 7. Functional Inventory

| Funcionalidade | Evidência / estado |
|---|---|
| Landing | VERIFICADO: hero e proposta residencial/comercial |
| Serviços | VERIFICADO: quatro categorias descritas |
| Navegação | VERIFICADO: âncoras para início, serviços, projetos e contato |
| Portfólio | VERIFICADO: quatro placeholders, sem fotos |
| Orçamento | VERIFICADO: nome, tipo, serviço e mensagem; prepara WhatsApp |
| WhatsApp | VERIFICADO: links no topo, hero e botão flutuante |
| Instagram | VERIFICADO: links no portfólio e rodapé |
| Responsividade | VERIFICADO: CSS com breakpoints 800 e 480 px; resultado visual não testado |
| Deploy público | VERIFICADO: HTTP 200 na raiz |
| Armazenamento de pedidos | VERIFICADO: inexistente no código; envio final externo não auditado |

## 8. Code Quality Audit

**VERIFICADO:** TypeScript estrito (`strict: true`, `allowJs: false`), props de ícone tipadas, helper WhatsApp único, `key` estável nos projetos e links externos protegidos. Não foram encontrados `any`, fetches, efeitos ou estado global no pequeno código próprio lido. CSS usa variáveis e estrutura por seções; não há necessidade de impor outro padrão de estilização.

**VERIFICADO — F10:** página concentra 414 linhas e o CSS 870 linhas, parte delas espaçamento. Isso é manutenção concentrada, não falha arquitetural crítica. Motion está declarado sem uso. Não há prova de que ele esteja no bundle final.

**VERIFICADO — F12:** `lint` executa `tsc --noEmit`; é checagem de tipos, não lint React/Next. Não há testes nem CI real na raiz. **RECOMENDADO:** nomear typecheck corretamente, adicionar lint proporcional e smoke dos fluxos essenciais em futura fase, sem testes que apenas espelhem JSX.

## 9. UX/UI Audit

**VERIFICADO:** proposta de valor clara, CTA repetido em locais úteis, serviços sucintos, texto explica que o pedido será preparado para WhatsApp. Não promete armazenamento próprio nem confirma envio inexistente.

**VERIFICADO — F02:** “Ver trabalhos” e “Trabalhos que falam pelo acabamento” desembocam em quatro blocos “Em breve, fotos reais dos nossos trabalhos” (`app/page.tsx:229`). **INFERIDO:** a ausência de prova visual reduz confiança no principal argumento comercial; P1 por quebra de expectativa do CTA, não por preferência estética.

**VERIFICADO — F06:** não há região atendida ou horários de atendimento no conteúdo próprio. **INFERIDO:** visitantes não sabem se podem contratar na localização desejada. **RECOMENDADO:** obter informações reais do responsável antes de escrever qualquer cidade, prazo ou garantia.

Grade de quatro serviços em três colunas deixa um cartão na linha seguinte. É escolha visual válida, não bloqueador. Depoimentos, garantias e fotos somente reais e autorizados; nenhum dado comercial deve ser fabricado.

## 10. Responsive Design Audit

**VERIFICADO:** container limitado a 1160 px/92%, hero com `clamp`, CTAs com wrap, grids de uma coluna até 800 px, rodapé empilhado e padding inferior de 90 px no mobile. O viewport remoto é `width=device-width, initial-scale=1`, sem bloquear zoom.

**VERIFICADO — F09:** até 800 px `.links a:not(.btn)` recebe `display:none`; navegação para serviços, projetos e contato desaparece sem alternativa no topo. O conteúdo continua acessível por rolagem e “Ver trabalhos” existe no hero. **RECOMENDADO:** solução simples de navegação mobile, sem exigir menu complexo.

**INFERIDO:** rodapé em linha acima de 800 px, `white-space:nowrap` e margem de 150 px podem pressionar larguras intermediárias. Botão fixo pode cobrir controles em algumas posições; não foi reproduzido. Não contar como defeitos adicionais sem teste. Verificar 320, 360, 390, 768, 800, 801, 1024 e 1440 px, orientação horizontal, zoom 200% e reflow equivalente a 320 CSS px, teclado virtual e ancoragem sob nav fixo. `scroll-margin-top:74px` ajuda as seções.

## 11. Accessibility Audit

**VERIFICADO:** `lang=pt-BR`, `nav`, `main`, `section`, `article` e `footer`; um H1, três H2 e H3 subordinados. Labels existem e estão associados por `htmlFor`/`id`; são visualmente ocultos. Ícone SVG de Instagram usa `aria-hidden=true`. Links relevantes possuem nomes textuais/aria-label. Não há imagens de conteúdo sem alt porque não há imagens.

**VERIFICADO — F01, P1:** razões calculadas a partir das cores hexadecimais do CSS pela fórmula sRGB de luminância relativa:

| Par | Razão | Leitura |
|---|---:|---|
| Branco / WhatsApp `#25d366` | 1,98:1 | Texto pequeno abaixo de 4,5:1 |
| Dourado `#d79b45` / papel `#f7f5f0` | 2,22:1 | Eyebrows abaixo de 4,5:1 nas seções de fundo sólido |
| Placeholder `#827d76` / branco | 4,08:1 | Texto abaixo de 4,5:1 |
| Muted `#706b63` / papel | 4,85:1 | Par nominal satisfaz texto normal |
| Branco / extremo `#9d8d7a` do primeiro projeto | 3,22:1 | Indício adicional para texto pequeno sobre gradiente |

As três primeiras falhas são confirmadas pelos pares sólidos declarados. A amostra do gradiente não substitui medição dos pixels atrás de cada texto; `.project-content span` também usa opacidade. WCAG 2.2 exige 4,5:1 para texto normal e 3:1 para texto grande, com exceções específicas. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/).

**VERIFICADO — F08:** ausência de skip link e de `prefers-reduced-motion`; scroll suave global; inputs removem outline e usam borda/sombra dourada de baixo destaque. Há regras focus-visible para botões, Instagram CTA e botão flutuante; outros links dependem do foco nativo. Portanto, não afirmar ausência total de foco. **RECOMENDADO:** labels visíveis persistentes, instruções de obrigatoriedade/opcionalidade, foco claramente distinguível, redução de movimento e atalho para conteúdo. Conformidade completa e ordem/foco real dependem de teste em navegador/leitor de tela.

## 12. SEO Audit

**VERIFICADO:** `app/layout.tsx:3` define title e description pertinentes, exportação tipada no servidor. HTML remoto contém esses valores, charset, viewport e idioma. A raiz contém texto e headings reais, URLs internas simples por fragmento, sem bloqueio `noindex` observado na resposta da página.

**VERIFICADO — F03:** não há canonical, metadataBase, Open Graph ou Twitter cards no código/head remoto. **RECOMENDADO:** definir origem canônica aprovada, canonical da raiz e metadados sociais com imagem real de marca. `metadataBase` organiza URLs relativas; sua ausência isoladamente não bloqueia indexação. [Next.js Metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

**VERIFICADO — F04:** `/robots.txt` e `/sitemap.xml` responderam 404; arquivos equivalentes ausentes no projeto. Isso não prova bloqueio de indexação: uma landing pública pode ser descoberta sem sitemap e sem robots. **RECOMENDADO:** explicitar política de crawling e sitemap de uma URL canônica; fragmentos não são páginas independentes. Não inventar `lastModified` em cada request. [Robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots), [Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap).

**VERIFICADO — F05:** favicon ausente, `/favicon.ico` 404 e nenhum ícone declarado no head observado. **RECOMENDADO:** favicon próprio e ícone Apple conforme identidade existente. Indexação efetiva, posição no Google e propriedade Search Console não verificadas. Não há necessidade de meta keywords ou múltiplos H1 artificiais.

## 13. Local SEO Opportunities

**VERIFICADO — F06:** conteúdo não documenta cidade, bairros, raio/região de atendimento, endereço ou horários. O DDD do telefone não comprova área atendida. Não foi inventada localização.

**RECOMENDADO:** confirmar nome comercial, regiões reais, horários e contato; publicar informação útil e consistente no site e nos canais oficiais. Avaliar Google Business Profile, se elegível, com o responsável. Usar dados estruturados adequados somente com fatos confirmados e atender requisitos aplicáveis; não inventar endereço para buscar resultado enriquecido. A documentação não garante exibição ou ranking. [Google Local Business](https://developers.google.com/search/docs/appearance/structured-data/local-business).

Páginas por serviço/localidade são evolução opcional dentro de F17, só com conteúdo próprio e demanda comprovada; evitar páginas quase duplicadas por cidade. Fotos reais com contexto do serviço têm maior valor inicial que expansão artificial de URLs.

## 14. Performance Audit

**VERIFICADO:** não há raster, vídeo, fontes remotas, embeds ou SDKs de terceiros no código. `public/images` está vazio. `next/image` não é usado e não é necessário para os atuais gradientes/SVGs. Fonte de sistema reduz requisições e risco de troca tardia de fonte.

Medição HTTP da entrega pública, bytes após descompressão automática do fetch, não bytes transferidos:

| Recurso | Bytes |
|---|---:|
| HTML raiz | 15.739 |
| CSS `0hdggfc6gnogy.css` | 11.563 |
| JS `1kbt14nefgsiq.js` | 16.797 |
| JS `1b71v7eci7_s_.js` | 183.100 |
| JS `28tgvtlohwu9v.js` | 229.617 |
| JS `turbopack-3dqh5t1xou15s.js` | 9.718 |
| JS `3s1bx587l07va.js` | 14.377 |
| JS `1qnj0j52v0uz6.js` | 10.195 |
| JS `0c0hxoamwjsbw.js` | 112.594 |
| Soma dos sete JS referenciados | 576.398 |

Todos os assets consultados responderam 200, Brotli e `public,max-age=31536000,immutable`. O script `0c0hxoamwjsbw.js` aparece com `noModule`; a soma inclui esse recurso legado e **não é o download efetivo de um navegador moderno**, tampouco JavaScript todo executado. Sem trace/bundle analyzer, não atribuir bytes ao Motion nem declarar lentidão.

**RECOMENDADO — F10:** comparar bundle e interação após eventual isolamento do formulário, remover dependência sem uso em mudança autorizada e medir custo do `backdrop-filter` em aparelho real se houver sintoma. Na inclusão de fotos, usar dimensões/sizes corretos, formatos otimizados e carregamento apropriado; nenhuma foto foi criada nesta etapa.

## 15. Core Web Vitals Risks

**INFERIDO:** o H1 é candidato a LCP, pois não há hero com imagem; só um trace identifica o elemento efetivo. Fonte de sistema e ausência de imagens sem dimensões reduzem riscos comuns de CLS. Hidratação ampla pode afetar dispositivos lentos, mas não foi medido INP ruim. Não há scripts de analytics observados no código que justifiquem culpar terceiros.

**RECOMENDADO:** medir mobile e desktop separadamente, distinguir laboratório de campo e avaliar percentil 75. Metas de referência: LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. Nenhuma nota ou valor do site foi inventado. [Web Vitals](https://web.dev/articles/vitals?hl=en).

F10 cobre redução de trabalho desnecessário; F17 cobre acompanhamento futuro. Ausência de métricas é limitação da auditoria, não um P0/P1 adicional.

## 16. Security Audit

**VERIFICADO:** todos os cinco anchors com `target=_blank` também têm `rel=noopener noreferrer`; `window.open` usa `noopener,noreferrer`. Destinos são constantes HTTPS. `encodeURIComponent` protege a composição do parâmetro text; React renderiza textos, sem `dangerouslySetInnerHTML` no código próprio. Não há endpoint de orçamento a sofrer spam de banco/API própria.

**VERIFICADO:** busca no código/configuração por chaves privadas, padrão AWS, tokens GitHub/Stripe e referências a variáveis de ambiente não retornou arquivos. `.env*` é ignorado com exceção `.env.example`; nenhum `.env` real foi encontrado no inventário. Telefone/perfil são contatos públicos, não credenciais. Busca por padrões não prova ausência de todo segredo; histórico Git completo e arquivos internos da plataforma não foram auditados.

**VERIFICADO:** HTTPS e HSTS `max-age=63072000; includeSubDomains; preload` na produção. Não apareceram CSP, X-Content-Type-Options, Referrer-Policy nem proteção explícita contra framing na resposta da raiz. **RECOMENDADO — F14:** hardening proporcional, CSP primeiro testada em preview/report-only se adequada, evitando quebrar scripts Next. Ausência desses headers não prova exploração. CORS `*` observado em conteúdo público não é, isoladamente, vazamento de dados autenticados.

**INFERIDO — F07:** sem JavaScript, o form sem action/method pode executar GET para a própria página com dados na query; falha de hidratação pode expor nome e mensagem a URL/histórico/logs de requisição. Não houve submissão para comprovar, nem envio de dados reais. Documentar encaminhamento ao WhatsApp, minimizar dados e oferecer alternativa segura. Não se conclui infração legal ou se exige banner de cookies sem evidência de rastreamento.

Auth, autorização, CSRF, SQL injection, SSRF e tenant isolation não possuem superfícies próprias correspondentes neste código. Não adicionar serviços apenas para cumprir checklist genérico.

## 17. Next.js Audit

**VERIFICADO:** App Router, layout raiz válido, metadata no servidor, imports CSS e configuração Tailwind v4 coerentes, strict TypeScript. Página cliente recebe HTML inicial publicado (`x-nextjs-prerender:1`). Não há chamadas dinâmicas ou fetches próprios que exijam SSR por requisição.

**RECOMENDADO:** preservar framework atual; delimitar Client Component onde necessário (F10), usar convenções de arquivos metadata (F03–F05) e `next/image` apenas ao introduzir fotos. Client Components podem ser pré-renderizados; reduzir fronteira cliente tem objetivo de reduzir hidratação, não “consertar ausência de SEO”. [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).

Ausência de `loading.tsx`/`error.tsx`/`not-found.tsx` próprios não é problema importante para esta única rota sem operações assíncronas próprias; o 404 padrão respondeu normalmente. A prioridade de erro é o fluxo WhatsApp. `next-env.d.ts` referencia `.next/dev/types`: passou neste ambiente com artefatos existentes; checkout limpo deve gerar tipos antes do typecheck em CI, sem editar manualmente o arquivo gerado.

## 18. Vercel / Production Audit

| Requisição pública | Resultado observado |
|---|---|
| `/` | 200, HTML, Brotli, cache HIT, pré-renderizado |
| `/robots.txt` | 404 |
| `/sitemap.xml` | 404 após repetição de consulta inicialmente falha |
| `/favicon.ico` | 404 |
| `/manifest.webmanifest` | 404 |
| `/software-engineering-blueprint-v2/AGENTS.md` | 404 |

**VERIFICADO:** cache da raiz `public, max-age=0, must-revalidate`, headers da plataforma e assets imutáveis. A resposta pública tem o mesmo title e placeholders do código, mas não há prova do SHA exato implantado.

**Não verificado:** Root Directory, build/install commands, versão Node, branch de produção, proteção de previews, logs de build, integrações, custos, domínio próprio e procedimento real de rollback no painel. Sem alterações de configuração.

**RECOMENDADO — F12/F13:** documentar build de preview, smoke e rollback para deployment anterior, confirmar runtime e instalação por lockfile. Não há evidência que justifique mudar para export estático ou configurar cache manualmente.

## 19. Dependency Audit

**VERIFICADO:** `npm audit --json --ignore-scripts` executou com exit code 0 e retornou vulnerabilidades info/low/moderate/high/critical = 0; total 125 dependências no relatório, incluindo transitivas e opcionais. Primeira tentativa restrita falhou por acesso de rede; a consulta permitida posterior foi bem-sucedida. Nenhum `audit fix` ou install executado. Zero advisories não constitui garantia futura de segurança.

O lockfile foi analisado integralmente como JSON: 126 entradas, todos os `resolved` presentes apontam ao registro npm e nenhuma entrada com `resolved` está sem `integrity`. As árvores de código interno das dependências não foram auditadas linha a linha.

**VERIFICADO — F11:** todas as dependências diretas em `latest`; sem engines/versão Node documentada. O lockfile reduz variação em instalações que o respeitam, portanto não chamar o build atual de necessariamente não reprodutível. **RECOMENDADO:** política explícita de versões e runtime, instalar com `npm ci` no fluxo apropriado e atualizar deliberadamente. Plugin PostCSS/Tailwind pode ser classificado como ferramenta de build conforme a configuração final; isso não é falha de runtime demonstrada.

## 20. WhatsApp Integration Audit

**VERIFICADO:** `app/page.tsx:12` centraliza número com DDI e helper codifica texto; CTAs têm mensagens úteis; formulário inclui nome/tipo/serviço/mensagem opcional. Não há SDK nem backend. A abertura não envia a mensagem automaticamente, e não existe confirmação de entrega.

**VERIFICADO — F07:** `window.open` não é acompanhado de alternativa acessível ou feedback de orientação em caso de falha. Com `noopener`, retorno nulo não deve ser tratado sozinho como prova de popup bloqueado. **RECOMENDADO:** disponibilizar link explícito de continuidade e indicar que o usuário precisa confirmar o envio no WhatsApp; tratar modo sem JS sem colocar dados em GET na própria página. Não prometer confirmação que o site não recebe.

Titularidade do número, existência/estado da conta, abertura no aplicativo e efetivo recebimento não foram verificados. Validação manual futura deve usar mensagem de teste autorizada; nenhum contato foi feito nesta etapa.

## 21. Instagram Integration Audit

**VERIFICADO:** mesma constante usada em dois links; handle exibido combina com a URL e há proteção para nova aba. O ícone SVG próprio tem tamanho e semântica decorativa definidos.

**VERIFICADO — F15:** URL inclui parâmetro `stkn` de compartilhamento. Não há evidência de credencial privada ou vulnerabilidade nesse parâmetro. **RECOMENDADO:** preferir URL limpa do perfil após conferir o destino. Disponibilidade, titularidade e qualidade dos trabalhos na conta não foram verificadas; não declarar link quebrado sem evidência. O site funciona sem API Instagram ou embed.

## 22. Form Audit

**VERIFICADO:** labels associados, `required` em nome/tipo/serviço, `autocomplete=name`, opção inicial desabilitada e mensagem opcional. O browser realiza validação nativa com JS funcional. Não há máscara desnecessária, requisição a servidor próprio ou persistência simulada.

**VERIFICADO — F07/F08:** faltam labels visíveis, indicação visual persistente de obrigatório/opcional, limites de comprimento e alternativa explícita para falha na abertura externa. `required` não trata conteúdo só com espaços como um nome útil. **RECOMENDADO:** trim e limites razoáveis, orientação clara, preservação da mensagem e opção de continuidade, sem adicionar biblioteca de forms para quatro campos. Limites são melhoria de usabilidade/robustez da URL, não vulnerabilidade confirmada de injeção.

Casos a validar na implementação: envio vazio; espaços; acentos, `&`, quebras de linha e emoji; texto comprido; mensagem opcional vazia; retorno do app; popup bloqueado; JS desabilitado; teclado; leitura dos erros nativos. Não executar envio real sem autorização específica.

## 23. Portfolio Audit

**VERIFICADO — F02:** quatro títulos genéricos, gradientes CSS e aviso de fotos futuras; nenhum asset local, `<img>` ou imagem de fundo externa. É um placeholder transparente, não prova de trabalhos realizados.

**RECOMENDADO:** receber fotos reais autorizadas, selecionar poucos casos bons, descrever serviço e acabamento com contexto verificável; ocultar/reformular a promessa de galeria enquanto não houver material. Evitar expor endereços residenciais, rostos e placas sem necessidade. Dimensionar/otimizar fotos e fornecer alt descritivo. Não usar imagens geradas ou stock como se fossem projetos reais. Risco de alteração médio por conteúdo, direitos de uso e potencial aumento do LCP/CLS.

## 24. README / Documentation Audit

**VERIFICADO — F13:** README abre com “Prime Pinturas — Portfólio”, divergindo de “3 D Pinturas”. Ensina extração de ZIP, `npm install` e desenvolvimento, mas não documenta produção, Node, build, checagens, rollback, fotos e revisão do fluxo externo. Explica corretamente os placeholders e as constantes comerciais.

**RECOMENDADO:** corrigir identidade e documentar somente operação real, link de produção, comandos validados, dependências de serviços externos, localização canônica da Blueprint e estado de SPEC. Sem alterar os arquivos genéricos nesta etapa. Incluir instrução futura de instalação por lockfile e geração de tipos em checkout limpo.

## 25. Git / Repository Hygiene

**VERIFICADO:** `git ls-files` lista dez arquivos próprios; a Blueprint estava inteira não rastreada antes da auditoria. `git status --short` inicial mostrou apenas `?? software-engineering-blueprint-v2/`. HEAD local observado: `dfb011d` (`docs: corrige README do projeto`). Não se inspecionou vínculo remoto para atestar GitHub.

`.gitignore` cobre node_modules, .next, .env* e .DS_Store, preservando exemplo de ambiente. Não ignora `*.tsbuildinfo`, logs ou `.vercel`; só adicionar padrões se surgirem no fluxo. Typecheck foi executado com `--incremental false` justamente para não criar cache. Avisos de leitura de ignore global do Git por permissão não impediram inventário/status local.

**VERIFICADO:** Blueprint não contém arquivos temporários identificados: `.gitkeep`, exemplos e templates são intencionais. Está fora de `app` e `public`, não é importada pelo app e tem apenas ~31 KB. A URL testada respondeu 404, sem evidência de exposição pública. `tsconfig` abrange `**/*.ts(x)`; atualmente a Blueprint não contém esses arquivos, mas futuros exemplos podem entrar no typecheck. Tailwind usa detecção automática e exemplos podem merecer exclusão se houver crescimento; nenhum inchaço atribuível à pasta foi comprovado.

**RECOMENDADO — F13:** versionar regras/contexto úteis e este relatório como documentação após revisão, em commit próprio quando autorizado, adequando paths. Não ignorar a Blueprint inteira por padrão. O material pode seguir para o ambiente de build em futuros deployments se incluído na fonte; isso é diferente de ser servido ou entrar no bundle. Avaliar exclusão do upload conforme o fluxo Vercel real, preservando documentos necessários a CI. Não adicionar `.vercelignore` indiscriminadamente. [Vercel .vercelignore](https://vercel.com/docs/deployments/vercel-ignore).

## 26. Technical Debt

**VERIFICADO:** dívida concentrada em conteúdo de portfólio, acessibilidade de cores, metadata, limites da interação externa, dependências `latest`, ausência de gates reais e Blueprint ainda genérica. F01–F14 descrevem essas frentes sem duplicar severidades.

**INFERIDO:** separar a parte interativa e manter dados comerciais consistentes facilitará manutenção, mas não requer CMS, camada de domínio, API ou design system. CSS global atual é aceitável para o tamanho do site. Uma refatoração integral teria risco maior que correções locais.

## 27. Risks

| Tipo | Classificação | Risco e vínculo |
|---|---|---|
| Acesso ao CTA | VERIFICADO | Baixo contraste de texto; F01 |
| Confiança comercial | INFERIDO a partir de placeholders verificados | Expectativa de portfólio não atendida; F02 |
| Qualificação de leads | INFERIDO | Região não informada; F06 |
| Perda do pedido / URL com dados | INFERIDO | JS/popup e submissão padrão; F07 |
| Atualização | VERIFICADO quanto à configuração | `latest` permite variação ao regenerar lockfile; F11 |
| Regressão | INFERIDO | Falta de lint/smoke/CI; F12 |
| SEO/preview incompletos | VERIFICADO quanto à ausência | Metadata e rotas auxiliares; F03–F05 |
| Segurança residual | RECOMENDADO | Hardening de headers; F14, sem exploração demonstrada |

Sem incidente, vazamento, indisponibilidade crítica ou vulnerabilidade conhecida confirmados. Sem prova de aderência total a WCAG ou de bons Core Web Vitals. A falta de acesso ao painel não autoriza supor configuração incorreta.

## 28. Quick Wins

**RECOMENDADO, somente após autorização:** corrigir pares de cores F01; alinhar promessa do portfólio ao conteúdo disponível F02; preencher metadata e favicon F03/F05; publicar robots/sitemap F04; tornar labels visíveis F08; atualizar documentação F13. Limpar link Instagram F15 é simples, mas de menor impacto. Nenhuma dessas propostas exige reconstrução.

Fotos reais e região atendida dependem de informações do responsável. Não substituir esse trabalho por dados inventados. Separação de Client Component e alterações de versões exigem validação proporcional, mesmo que o diff seja pequeno.

## 29. P0 Findings

**Quantidade: 0.** Nenhum achado atende ao critério de bloqueio de produção ou risco crítico com a evidência obtida. A página está acessível; npm audit não apontou vulnerabilidades. Isso não equivale a garantia irrestrita de segurança.

## 30. P1 Findings

| ID | Descoberta | Evidência | Impacto |
|---|---|---|---|
| F01 | VERIFICADO: contraste insuficiente | `app/globals.css:79`, `:560` aproximadamente para placeholders, `:587`; razões na seção 11 | Leitura de CTAs e conteúdo comprometida; acessibilidade profissional |
| F02 | VERIFICADO: portfólio ainda sem trabalhos reais | `app/page.tsx:206–229`, `public/images` vazio, quatro avisos no HTML remoto | INFERIDO: enfraquece confiança e promessa de “Ver trabalhos” antes de divulgação |

## 31. P2 Findings

| ID | Descoberta | Evidência e impacto |
|---|---|---|
| F03 | VERIFICADO: metadata social/canonical incompleta | Layout e head; previews e referência canônica não explicitados |
| F04 | VERIFICADO: robots/sitemap ausentes | Arquivos ausentes e HTTP 404; descoberta menos explícita, sem prova de bloqueio |
| F05 | VERIFICADO: favicon ausente | HTTP 404 e head; identidade em abas/favoritos |
| F06 | VERIFICADO: atendimento local não documentado | Textos/README; INFERIDO: dificulta leads qualificados e SEO local |
| F07 | VERIFICADO: formulário sem continuidade alternativa | Handler e `<form>`; INFERIDO: falha externa/JS e query com dados |
| F08 | VERIFICADO: lacunas de labels visíveis e facilidades de acesso | `.sr-only`, ausência de skip/reduced-motion, foco customizado discreto; melhorar uso assistivo |
| F09 | VERIFICADO: navegação de seção some no mobile | CSS até 800 px; acesso depende mais de rolagem |
| F10 | VERIFICADO: fronteira cliente ampla e Motion sem import | Página cliente e package; RECOMENDADO reduzir manutenção/hidratação, ganho não medido |
| F11 | VERIFICADO: política de dependências/runtime implícita | `latest` e engines ausente; risco ao atualizar/regenerar lockfile |
| F12 | VERIFICADO: gates limitados a tipos | `lint=tsc`, testes/CI raiz ausentes; regressões menos protegidas |
| F13 | VERIFICADO: documentação/Blueprint não integrada | Nome divergente, TBD, paths aninhados, sem instrução raiz; manutenção e operação |
| F14 | RECOMENDADO: hardening proporcional | Headers adicionais ausentes na resposta observada; defesa adicional sem incidente confirmado |

## 32. P3 Findings

| ID | Descoberta | Evidência e justificativa |
|---|---|---|
| F15 | RECOMENDADO: limpar URL Instagram | VERIFICADO: parâmetro `stkn`; simplifica link, sem quebra comprovada |
| F16 | RECOMENDADO: avaliar manifest só se houver objetivo | VERIFICADO: ausente/404; não necessário para landing, não criar PWA sem demanda |
| F17 | RECOMENDADO: evolução orientada a resultados | Sem métricas/analytics no código; avaliar medição de CTA, vitals e conteúdo adicional conforme necessidade real |

## 33. Recommended Architecture

**RECOMENDADO:** preservar Next.js App Router e Vercel, layout servidor com metadata, página majoritariamente estática e um componente cliente pequeno para orçamento. Opcionalmente extrair constantes de negócio e helper WhatsApp se isso reduzir duplicação na evolução. Manter CSS atual ajustado; fotos reais em `public/images` ou origem aprovada com otimização apropriada.

Uma landing continua suficiente. Sem API/banco/auth/filas. Não criar endpoints para apenas redirecionar ao WhatsApp. Formulário deve funcionar de modo transparente sobre o que o site faz e o que depende do aplicativo externo. Reversão por deployment anterior, sem migrações de dados.

## 34. Prioritized Implementation Plan

Todas as soluções abaixo são **RECOMENDADO** e dependem de autorização explícita de implementação. Problemas verificados e inferências estão separados nas seções acima. A tabela inclui todos os achados únicos e indica risco da alteração, não severidade do estado atual.

| Fase / prioridade | ID / problema | Evidência / arquivos | Impacto | Solução proposta | Risco da alteração / aceite |
|---|---|---|---|---|---|
| FASE 0 / P0 | Nenhum confirmado | HTTP 200 e auditoria atual | Sem bloqueio crítico identificado | Nenhuma correção emergencial; reclassificar apenas se nova evidência surgir | Nenhum |
| FASE 1 / P1 | F01 contraste | CSS: eyebrow, floating, placeholders e foco | Leitura/acessibilidade | Ajustar cores mantendo identidade | Baixo; medir pares e conferir estados reais |
| FASE 1 / P1 | F02 portfólio | page.tsx e public/images vazios | Confiança comercial | Fotos reais autorizadas ou retirar promessa até disponibilizá-las | Médio; aprovação factual, alt, dimensões e mobile |
| FASE 2 / P2 | F03 metadata | layout.tsx e head | Compartilhamento/canonical | Origem aprovada, canonical, OG/Twitter e imagem de marca | Baixo; conferir head e URLs absolutas no preview |
| FASE 2 / P2 | F04 crawling | app e 404 remotos | Descoberta | robots.ts e sitemap.ts simples | Baixo; 200, URLs canônicas e nenhuma exclusão acidental |
| FASE 2 / P2 | F05 ícone | app/public, 404 favicon | Identidade | Adicionar favicon/icon próprios | Baixo; verificar resposta e visual |
| FASE 2 / P2 | F08 facilidades de acesso | page.tsx/globals.css | Uso do formulário/teclado | Labels visíveis, skip link, foco e reduced-motion | Baixo; teclado, leitura de labels, contraste e zoom |
| FASE 2 / P2 | F10 cliente/dep sem uso | page.tsx, package e lock; futuro componente | Manutenção/hidratação | Isolar form e remover Motion se continuar sem uso | Médio; comparar bundle e comportamento; sem promessa de ganho |
| FASE 2 / P2 | F11 versões | package.json, lock e documentação Node | Atualizações previsíveis | Fixar política compatível com lock atual e runtime suportado | Médio; instalação limpa/build em ambiente isolado |
| FASE 2 / P2 | F12 quality gates | package, configs e futura CI raiz | Prevenir regressões | Typecheck nomeado, lint e smoke crítico; CI básica | Médio; checkout limpo, geração de tipos e build; não exigir suíte enterprise |
| FASE 2 / P2 | F13 docs/Blueprint | README, Blueprint, futura instrução raiz | Operação e manutenção | Corrigir nome, contexto e paths; orientar preview/rollback e higiene | Baixo; links/comandos coerentes, escopo de deploy revisado |
| FASE 2 / P2 | F14 headers | Possível next.config e resposta pública | Defesa adicional | Headers aplicáveis e política CSP validada gradualmente | Médio; preview, scripts/hidratação intactos e headers conferidos |
| FASE 3 / P2 | F06 área atendida | page.tsx, layout.tsx, contexto | Qualificação/SEO local | Coletar fatos e publicar regiões/horários reais; schema apenas elegível | Baixo técnico; risco factual médio; confirmar com responsável |
| FASE 3 / P2 | F07 orçamento resiliente | page.tsx / futuro formulário | Continuidade e minimização de exposição | Link alternativo, explicação de envio, trim/limites e modo sem JS seguro | Médio; testar bloqueio, dados especiais, não envio e sem GET com dados na raiz |
| FASE 3 / P2 | F09 navegação mobile | page.tsx/globals.css | Acesso às seções | Preservar navegação simples em larguras pequenas | Baixo; 320–1440 px, foco, zoom e header fixo |
| FASE 4 / P3 | F15 URL Instagram | page.tsx constante | Manutenção | Validar perfil e usar URL limpa | Baixo; conferência manual, sem publicar mensagens |
| FASE 4 / P3 | F16 manifest | Futuro app/manifest.ts e ícones | Uso opcional | Criar somente se houver objetivo de instalação/atalho | Baixo; adiar sem demanda |
| FASE 4 / P3 | F17 acompanhamento/conteúdo | Futuro mecanismo de métricas/docs/páginas | Decisão baseada em dados | Medir CTA/vitals sem registrar mensagem; conteúdo local só útil e real | Médio; justificar privacidade/custo; não confundir clique com orçamento recebido |

Antes de mudanças relevantes: SPEC curta com critérios de aceite, PLAN e TASKS proporcionais, preservando site existente. Ao concluir cada fase autorizada: tipos, lint aplicável, build, preview, smoke sem envio real não autorizado e revisão do diff. Fazer revisão de segurança para headers/dependências/form. Deploy permanece sujeito à autorização de escopo; registrar como voltar ao deployment anterior. Não executar fases automaticamente a partir deste relatório.

## 35. Files Inspected

**Código/configuração próprios lidos integralmente:** `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `package.json`, `tsconfig.json`, `postcss.config.mjs`, `next-env.d.ts`, `.gitignore`, `README.md`. `package-lock.json` analisado integralmente como JSON para versões, origem, integridade e árvore do audit. `components/` e `public/images/` inventariados vazios. `.next/` inventariado como artefatos de desenvolvimento; não tomado como build de produção. Manifests locais dos pacotes da seção 4 lidos para comparar versões. `.git` consultado apenas via status, ls-files e último log, não varredura de todo o histórico.

**Blueprint — 69 arquivos lidos:** prefixo abaixo é `software-engineering-blueprint-v2/`; os caminhos internos iniciam em `software-engineering-blueprint/`.

```text
AGENTS.md
software-engineering-blueprint/AGENTS.md
software-engineering-blueprint/CHANGELOG.md
software-engineering-blueprint/CHECKLIST-INSTALL.md
software-engineering-blueprint/README.md
software-engineering-blueprint/START_PROJECT.md
software-engineering-blueprint/NEW_FEATURE.md
software-engineering-blueprint/VERSION
software-engineering-blueprint/.github/pull_request_template.md
software-engineering-blueprint/.github/workflows/ci.yml
software-engineering-blueprint/.github/workflows/dependency-review.yml
software-engineering-blueprint/.github/workflows/security.yml
software-engineering-blueprint/architecture/API.md
software-engineering-blueprint/architecture/ARCHITECTURE.md
software-engineering-blueprint/architecture/DATABASE.md
software-engineering-blueprint/architecture/INTEGRATIONS.md
software-engineering-blueprint/architecture/SYSTEM_DESIGN.md
software-engineering-blueprint/architecture/adr/ADR_TEMPLATE.md
software-engineering-blueprint/codex/CONTEXT.md
software-engineering-blueprint/codex/DEFINITION_OF_DONE.md
software-engineering-blueprint/codex/REVIEW_RULES.md
software-engineering-blueprint/codex/RULES.md
software-engineering-blueprint/codex/SECURITY_RULES.md
software-engineering-blueprint/codex/TESTING_RULES.md
software-engineering-blueprint/codex/WORKFLOW.md
software-engineering-blueprint/context/DECISIONS.md
software-engineering-blueprint/context/GLOSSARY.md
software-engineering-blueprint/context/MEMORY.md
software-engineering-blueprint/context/PROJECT_CONTEXT.md
software-engineering-blueprint/governance/CODING_STANDARDS.md
software-engineering-blueprint/governance/CONTRIBUTING.md
software-engineering-blueprint/governance/ENGINEERING_PRINCIPLES.md
software-engineering-blueprint/governance/PROJECT_LEVELS.md
software-engineering-blueprint/mcp/README.md
software-engineering-blueprint/operations/BACKUP_RECOVERY.md
software-engineering-blueprint/operations/DEPLOYMENT.md
software-engineering-blueprint/operations/INCIDENT_RESPONSE.md
software-engineering-blueprint/operations/OBSERVABILITY.md
software-engineering-blueprint/operations/ROLLBACK.md
software-engineering-blueprint/quality/CODE_REVIEW.md
software-engineering-blueprint/quality/PERFORMANCE.md
software-engineering-blueprint/quality/QUALITY_GATES.md
software-engineering-blueprint/quality/TESTING.md
software-engineering-blueprint/rag/README.md
software-engineering-blueprint/scripts/new-spec.ps1
software-engineering-blueprint/scripts/new-spec.sh
software-engineering-blueprint/scripts/validate-project.ps1
software-engineering-blueprint/scripts/validate-project.sh
software-engineering-blueprint/security/AUTHORIZATION.md
software-engineering-blueprint/security/DATA_PROTECTION.md
software-engineering-blueprint/security/SECRETS.md
software-engineering-blueprint/security/SECURITY_CHECKLIST.md
software-engineering-blueprint/security/SECURITY.md
software-engineering-blueprint/security/SUPPLY_CHAIN.md
software-engineering-blueprint/security/THREAT_MODEL.md
software-engineering-blueprint/skills/README.md
software-engineering-blueprint/skills/architecture/README.md
software-engineering-blueprint/skills/backend/README.md
software-engineering-blueprint/skills/database/README.md
software-engineering-blueprint/skills/frontend/README.md
software-engineering-blueprint/skills/security/README.md
software-engineering-blueprint/skills/testing/README.md
software-engineering-blueprint/specs/PLAN_TEMPLATE.md
software-engineering-blueprint/specs/SPEC_TEMPLATE.md
software-engineering-blueprint/specs/TASKS_TEMPLATE.md
software-engineering-blueprint/specs/active/.gitkeep
software-engineering-blueprint/templates/.env.example
software-engineering-blueprint/templates/docker/Dockerfile.example
software-engineering-blueprint/templates/openapi/openapi.yaml
```

**Validações executadas:** inventário/leitura de arquivos; Git status/arquivos rastreados/HEAD; `node node_modules/typescript/bin/tsc --noEmit --incremental false` (exit 0); `npm audit --json --ignore-scripts` (exit 0, zero advisories); busca de padrões de segredo sem imprimir valores; cálculo sRGB de contraste; GET da raiz/rotas auxiliares e assets públicos, sem envio de formulário. A primeira leitura de versões por `require(package/package.json)` encontrou export bloqueado de um pacote; leitura direta dos manifests resolveu a inspeção. Falhas iniciais de rede foram repetidas com consulta permitida, sem modificar dependências.

**Não executados:** build local (preservação de artefatos nesta auditoria); lint real/testes (não configurados); Lighthouse/axe/E2E e inspeção visual (sem ferramenta/pacote de navegador disponível na consulta, nenhuma instalação); auditoria de histórico por scanner dedicado; métricas de campo; acesso a painel; confirmação de recebimento WhatsApp/Instagram. Não usar a checagem de tipos local com `.next/dev` existente como prova de checkout limpo.

## 36. Final Production Readiness Assessment

**VERIFICADO:** produção pública acessível e pré-renderizada; base simples, tipos aprovados no ambiente atual, lockfile com integridade e nenhum advisory conhecido na consulta. Integrações são links externos seguros quanto ao tratamento de nova aba observado. Não há necessidade técnica demonstrada de reconstrução.

**INFERIDO — parecer:** adequado como presença institucional inicial, **com ressalvas para divulgação comercial ampla**. Corrigir F01 e resolver a promessa de portfólio F02 antes de apresentá-lo como vitrine profissional completa. Executar P2 em fases pequenas; medir experiência real antes de prometer desempenho ou conformidade. A aprovação comercial final ainda depende de conteúdo verdadeiro, validação de canais e smoke em navegador.

Contagem final: **P0 = 0; P1 = 2; P2 = 12; P3 = 3.** Etapa encerrada na auditoria. Aguardar autorização explícita antes de implementar qualquer recomendação.
