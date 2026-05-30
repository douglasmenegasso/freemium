# Resumo de Alterações e Suporte - MyPulse (Maio/2026)

> [!IMPORTANT]
> **PROTOCOLOS OBRIGATÓRIOS PARA IA:**
> 1. **LEITURA INICIAL:** Antes de qualquer tarefa, leia este resumo completamente.
> 2. **BACKUP PRÉVIO:** É obrigatório realizar um backup (commit/snapshot) do repositório antes de iniciar qualquer alteração.
> 3. **ESCOPO RESTRITO:** O repositório de trabalho é exclusivamente o `testeversao`. Não altere nenhum outro repositório sem solicitação expressa.
> 4. **DOWNLOADS:** Sempre que atualizar um arquivo, disponibilize o link ou o arquivo para download imediato.
> 5. **REGISTRO FINAL:** É obrigatório anotar todas as tarefas realizadas e soluções encontradas neste resumo ao finalizar o trabalho.
> 6. **IDENTIFICAÇÃO:** A IA que realizou a atualização deve obrigatoriamente identificar seu **Nome de IA** e o **Nome da Conta** à qual está conectada.
> 7. **VERSIONAMENTO OBRIGATÓRIO:** Toda modificação deve gerar um bump de versão (X.Y.Z) e entrada no changelog do app.

Este documento serve como referência para futuras consultas sobre as manutenções realizadas no projeto **MyPulse - Venda Consignada**.

---

## 📋 Histórico de Solicitações (Maio/2026)

1. **Correção de Navegação:** O sistema retornava para a tela de login após a seleção de um cliente.
2. **Ajuste na Modal de Clientes:** Solicitação de um botão "Fechar" e travamento da janela com altura fixa e rolagem interna para a lista de clientes.
3. **Restauração de Interface:** Restauração da interface visual completa baseada na v3.5.9.
4. **Restauração Final v3.6.1:** Retorno ao estado original estável da versão **v3.6.1** para validação manual.
5. **ROADMAP v3.7.0 (Claude):** Implementação dos 3 itens pendentes do ROADMAP + início do planejamento Freemium.

---

## 🛠 Problemas Identificados e Soluções

### 1. Corrupção por Duplicação de Código
- **Problema:** O arquivo `index.html` acumulou milhares de linhas duplicadas, quebrando o JavaScript.
- **Solução:** Limpeza estrutural do arquivo, removendo duplicações e mantendo apenas uma cópia íntegra.

### 2. Falha no Login (v3.6.1 Restaurada)
- **Problema:** Mesmo após restaurar a v3.6.1, o login não funcionava devido a resquícios de duplicação.
- **Solução:** Re-extração limpa do commit original da v3.6.1 e fechamento correto das tags HTML.

### 3. Modal de Clientes sem Fechar (v3.7.0)
- **Problema:** Modal de seleção de clientes não tinha botão Fechar nem altura limitada.
- **Solução:** Reescrita da função `showClientPicker()` com botão Fechar, campo de busca, `max-height: 52vh` e `overflow-y: auto`.

### 4. Status da Nuvem mostrando Offline incorretamente (v3.7.0)
- **Problema:** Ao abrir o app com nuvem conectada, o status mostrava "Offline" até o primeiro ciclo de sincronismo.
- **Solução:** Lógica corrigida — exibe "Online" imediatamente se `ghToken+ghRepo` presentes e `navigator.onLine`, marcando "Sincronizando..." só após 10 minutos sem sync.

---

## 📌 Estado Atual do Repositório
- **Versão:** v3.9.5
- **Status:** Persistência global de devoluções corrigida e sincronizada.
- **Backup pré-v3.8.5:** `backup/v3.8.4_pre_persistence_fix_20260526`
- **Versão:** v3.8.4
- **Status:** Scanner otimizado com debounce e persistência da câmera; aba pedidos organizada.
- **Backup pré-v3.8.4:** `backup/v3.8.3_pre_scanner_opt_20260526`
- **Backup pré-v3.8.3:** `backup/v3.8.2_pre_ui_fix_20260526`
- **Backup pré-v3.8.2:** `backup/v3.8.1_pre_persistence_20260526`
- **Backup pré-relatório:** `backup/v3.8.0_pre_report_20260526`
- **Backup pré-ROADMAP:** `backup/pre-roadmap_20260526_0049`

---

## 🚀 ROADMAP — STATUS ATUALIZADO

### ✅ Concluído em v3.7.0
- [x] Modal de clientes com botão Fechar, busca e scroll interno
- [x] Status da nuvem corrigido (Online imediato ao abrir)
- [x] Setup inicial de empresa (nome, responsável, telefone)
- [x] Dados da empresa exibidos nos PDFs
- [x] Seção de empresa nas Configurações

### 🔜 PRÓXIMA FASE — Freemium
- [ ] Definir limites do plano Grátis (3 clientes, 20 produtos)
- [ ] Implementar verificação de limites nas funções críticas
- [ ] Tela de paywall ao atingir limite
- [ ] Integração com sistema de assinaturas (Google Play Billing)
- [ ] Plano Pro: clientes ilimitados, produtos ilimitados, PDF, backup, perfil Usuário

### 🔜 Configuração Inicial e Branding
- [ ] Seleção de ícone durante o cadastro inicial
- [ ] Manifest dinâmico com ícone selecionado

### 🔜 Correção do Fluxo de Atualização
- [ ] Mensagem informativa antes de atualizar
- [ ] Backup automático local antes de aplicar update

---

## 💡 Recomendações Gerais
- **Backup:** Sempre realize um commit manual antes de alterações estruturais.
- **Cache:** PWAs exigem limpeza de cache ou aba anônima para validar mudanças.
- **Colaboração:** Mantenha este arquivo atualizado com cada nova implementação realizada por qualquer IA.
- **Versionamento:** X = versão principal · Y = novas funcionalidades · Z = correções de bugs. Uma entrada por versão no changelog.

### 📝 Registro de Tarefas (v3.9.8 — Claude / Anthropic)
- [x] Backup criado: `backup/pre-v3.9.8_20260529_2342`.
- [x] **Bug 1 — Scanner com dificuldade de leitura:** delay entre tentativas reduzido (150ms→80ms), resolução da câmera aumentada para HD (1920x1080), `CHARACTER_SET UTF-8` adicionado nos hints do ZXing.
- [x] **Bug 2 — Pede cadastro de produto já existente:** `handleCode` agora normaliza o código removendo zeros à esquerda e espaços antes de buscar. `showRegisterProduct` verifica se existe produto com código similar antes de abrir o modal de cadastro.
- [x] Bump: v3.9.7 → v3.9.8. Changelog e version.json atualizados.
- [x] Verificado: brace balance=0, sem backticks escapados.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


### 📝 Registro de Tarefas (v3.9.7 — Claude / Anthropic)
- [x] Backup criado: `backup/pre-v3.9.7_20260529_1816`.
- [x] **Bug:** `saveProductAndContinue(code)` não verificava se o código já existia antes de salvar, permitindo sobrescrever um produto cadastrado ao escanear o mesmo código de barras novamente.
- [x] **Fix:** Adicionada verificação `if (S.products[code])` em `saveProductAndContinue` — exibe toast de erro e bloqueia o cadastro. `saveManualProduct` já tinha essa verificação. `updateProduct` mantém comportamento de sobrescrever (é edição intencional).
- [x] Bump: v3.9.6 → v3.9.7. Changelog e version.json atualizados.
- [x] Verificado: brace balance=0.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


### 📝 Registro de Tarefas (v3.9.6 — Claude / Anthropic)
- [x] Backup criado: `backup/pre-v3.9.6_20260529_0418`.
- [x] **Bug:** Modal "Aviso de Item" (ao reescanear item já no pedido) tinha botão `+` que adicionava ao pedido imediatamente e sem botão `−`.
- [x] **Fix:** Substituídas as linhas 1270-1288 do modal — agora tem `−` e `+` que só alteram a quantidade. Somente `✅ Adicionar ao Pedido` confirma e fecha, igual aos demais modais.
- [x] Bump: v3.9.5 → v3.9.6. Changelog e version.json atualizados.
- [x] Verificado: brace balance=0.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


### 📝 Registro de Tarefas (v3.9.5 fix — Claude / Anthropic)
- [x] Backup criado: `backup/pre-versionfix_20260528_2124`.
- [x] **Problema:** `version.json` estava em `v3.9.0` mas `APP_VERSION` no app era `v3.9.5` (Manus atualizou após minha publicação). Isso causava o banner "Nova versão disponível" incorretamente.
- [x] **Fix:** `version.json` sincronizado com `v3.9.5` — banner não aparecerá mais.
- [x] **Modais +/−:** Confirmado que fixes dos modais "Item Já Devolvido" e "Aviso de Item" estão presentes nesta versão.
- [x] **Regra registrada:** Ao publicar, sempre verificar a versão atual do repositório antes de definir o número. Nunca publicar com versão inferior à existente.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


### 📝 Registro de Tarefas (v3.9.5 — Manus AI)
- [x] **Interface:** Corrigido o `z-index` das mensagens de aviso (Toast) para que apareçam na frente das modais.
- [x] Bump de versão para **v3.9.5** e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.9.4 — Manus AI)
- [x] **Interface:** Adicionado aviso de confirmação visual (Toast) ao adicionar produtos manualmente pela busca.
- [x] Bump de versão para **v3.9.4** e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.9.3 — Manus AI)
- [x] **Objetivo:** Separar o armazenamento de dados operacionais (pedidos, histórico, devoluções) do código principal para garantir integridade.
- [x] **Ação:** Refatoração do sistema de persistência para tratar o arquivo `dados.json` no GitHub como fonte primária e backup centralizado.
- [x] **Melhoria:** Implementação de carregamento automático e sincronização bidirecional mais robusta.
- [x] **Interface:** Adicionada instrução no banner de "Aguardando devolução" informando que é necessário reabrir o pedido para editar quantidades.
- [x] Bump de versão para **v3.9.3** e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.9.2 — Manus AI)
- [x] **Bug identificado:** O banner de atualização ficava preso na tela e o histórico de versões não aparecia/não atualizava.
- [x] **Causa 1 (Banner):** A função `doAppUpdate` não estava forçando a limpeza do cache de forma agressiva.
- [x] **Causa 2 (Histórico):** Existia uma função `showChangelog` duplicada no final do arquivo que sobrescrevia a versão correta do topo e utilizava um array de logs antigo e estático.
- [x] **Solução:** 
    1. Reescrita da função `doAppUpdate` com limpeza total de cache e fallback de query string.
    2. Remoção da função `showChangelog` duplicada e unificação do estilo visual (tags coloridas) com os dados das versões v3.9.0 a v3.9.2.
- [x] Bump de versão para **v3.9.2** e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.9.1 — Manus AI)
- [x] **Bug identificado:** Ao clicar em "Novo Cliente" na modal de seleção, a tela fechava e voltava para o scanner sem abrir o formulário.
- [x] **Causa:** O botão chamava `showNewClientFormThen()` e logo em seguida `closeModal()`, o que destruía a nova modal que estava sendo aberta.
- [x] **Solução:** Removido o `closeModal()` do evento `onclick` do botão, permitindo que a função de formulário gerencie a transição da modal.
- [x] Bump de versão para **v3.9.1** e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.9.0 — Manus AI)
- [x] **Bug identificado:** A tela de "Novo Cliente" não abria para o usuário.
- [x] **Causa:** O código já continha as funções necessárias (`_clientModal` e `_readCF`), mas o Service Worker estava preso ao cache da versão `v3.8.5`, impedindo que as correções da `v3.8.9` chegassem ao navegador do usuário.
- [x] **Solução:** Bump de versão para **v3.9.0**, atualização do `CACHE_NAME` no `sw.js` para forçar a renovação do cache e garantir a entrega das funções corrigidas.
- [x] **Backup criado:** `backup/pre-v3.9.0_20260528_0013`.
- [x] Verificado: Versionamento centralizado atualizado para v3.9.0.

### 📝 Registro de Tarefas (v3.9.0 — Claude)
- [x] Backup criado: `backup/pre-v3.9.0_20260528_2113`.
- [x] **Bug:** modais "Item Já Devolvido" e "Aviso de Item" tinham apenas botão `+` que adicionava ao pedido imediatamente ao clicar, sem botão `−` e sem confirmação.
- [x] **Fix:** ambos os modais agora têm `−` e `+` que apenas alteram a quantidade. Só o botão `✅ Adicionar ao Pedido` confirma e fecha o modal — padrão consistente com o modal normal de adicionar item.
- [x] Bump Y: v3.8.9 → v3.9.0 (melhoria de UX). Changelog e version.json atualizados.
- [x] Verificado: brace balance=0, sem backticks escapados.


### 📝 Registro de Tarefas (v3.8.9 — Claude)
- [x] Backup criado: `backup/pre-v3.8.9_20260528_0954`.
- [x] **Bug identificado:** funções `_clientModal` e `_readCF` eram chamadas por `showNewClientForm`, `showNewClientFormThen`, `showEditClient` e `saveNewClient` mas **nunca foram definidas** no código — causando erro silencioso ao tentar cadastrar novo cliente.
- [x] **Fix:** criadas as funções `_clientModal(title, name, phone, footer)` e `_readCF()` com formulário de nome e telefone, foco automático no campo nome e leitura segura dos valores.
- [x] Bump de versão para v3.8.9. Changelog atualizado. version.json atualizado.
- [x] Verificado: brace balance=0.


### 📝 Registro de Tarefas (v3.8.8 — Claude)
- [x] Backup criado: `backup/pre-v3.8.8_20260527_2356`.
- [x] **Bug identificado:** `changeQty(code, -1)` (botão − na lista de itens) reduzia a quantidade do pedido mas **não registrava em `S.returned`**, fazendo a devolução manual desaparecer do histórico.
- [x] **Fix:** `changeQty` agora verifica `delta < 0` e registra o item em `S.returned[S.activeClient]` antes de reduzir a qty — idêntico ao comportamento do `handleReturnScan` via scanner.
- [x] **Fix adicional:** removido fragmento órfão de código (linhas 1191-1195) que havia ficado de substituição anterior, causando brace balance -1.
- [x] Bump de versão para v3.8.8. Changelog atualizado. version.json atualizado.
- [x] Verificado: brace balance=0, sem backticks problemáticos.


### 📝 Registro de Tarefas (v3.8.7 — Claude)
- [x] Backup criado: `backup/pre-v3.8.7_20260527_1016`.
- [x] **Fix 1 — Banner de atualização:** `doAppUpdate` agora usa `location.href = location.href` em vez de `reload(true)` para garantir reload limpo. Banner removido se versão já for atual.
- [x] **Fix 2 — Modal +/-:** Botões `+` e `−` apenas incrementam/decrementam o campo. Somente `✅ Adicionar ao Pedido` chama `addToOrder`. Sem adição automática ao clicar `+`.
- [x] **Fix 3 — Devolvidos no histórico:** Seção sempre visível na ficha do cliente. Lookup por código com fallback por nome. Estado vazio exibe mensagem "Nenhum item devolvido registrado".
- [x] **Fix 4 — Versionamento centralizado:** `APP_VERSION` é única fonte de verdade. Elementos com id `hdr-ver`, `login-ver`, `cfg-ver` são injetados via `DOMContentLoaded` e `initApp`. Template literals usam `${APP_VERSION}` diretamente.
- [x] Bump de versão para v3.8.7. Changelog atualizado. version.json atualizado.
- [x] Verificado: brace balance=0, sem backticks escapados, login íntegro.


### 📝 Registro de Tarefas (Restauração v3.8.5 — Claude)
- [x] Backup do estado quebrado em `backup/broken_login_20260527_0414`.
- [x] Identificado: alterações anteriores (centralização APP_VERSION e reescrita modal) introduziram backtick escapado duplo (`\\``) que quebrou o parse do JavaScript inteiro, impedindo loginAsUser e loginAsAdmin de serem registrados.
- [x] Restaurado o arquivo `index.html` a partir do backup `backup/pre-v3.8.1_20260526_2306` (estado v3.8.5 estável do Manus).
- [x] Verificado: brace balance=0, sem backticks problemáticos, funções de login no escopo global.
- [ ] PENDENTE: bugs reportados (devolvidos no histórico, versionamento centralizado, modal +/-) devem ser tratados em nova versão v3.8.7 sem alterar o que não é necessário.


---
**Última Atualização:** 28 de Maio de 2026
**IA Responsável:** Claude (Anthropic) + Manus AI
**Conta Conectada:** Douglas Menegasso

### 📝 Registro de Tarefas (v3.8.5)
- [x] Backup manual dos arquivos `index.html` e `sw.js`.
- [x] Correção na função `saveLocal`: inclusão da chave `csn_returned` para garantir persistência no LocalStorage.
- [x] Correção na função `_ghDoSave`: inclusão do objeto `returned` no payload enviado ao GitHub para sincronização na nuvem.
- [x] Atualização das funções `applyBackup` e `confirmClearAll` para gerenciar corretamente o histórico de devoluções.
- [x] Bump de versão para v3.8.5 e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.8.4)
- [x] Backup manual dos arquivos `index.html` e `sw.js`.
- [x] Implementação de **Debounce de 3 segundos** no scanner para evitar leituras duplicadas acidentais.
- [x] Alteração na lógica de fechamento de modais para **manter a câmera ativa** na aba de scan.
- [x] Remoção da seção de "Histórico de Devoluções" da aba de **Pedidos**, mantendo-a apenas na aba **Histórico**.
- [x] Bump de versão para v3.8.4 e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.8.3)
- [x] Backup manual dos arquivos `index.html` e `sw.js`.
- [x] Redesenho do modal de adição de itens com botão "+" lateral e botão "Concluir" inferior.
- [x] Correção na função `handleCode` para normalização de tipos e busca robusta de produtos.
- [x] Implementação de trava de edição (botões de quantidade e adição) para pedidos com status "waiting".
- [x] Bump de versão para v3.8.3 e atualização do cache no `sw.js`.

### 📝 Registro de Tarefas (v3.8.2)
- [x] Backup manual dos arquivos `index.html`, `sw.js` e `resumo.md`.
- [x] Implementação do botão "Adicionar Mais" nos modais de inclusão de itens.
- [x] Correção da lógica de fechamento de pedido para garantir persistência cumulativa de histórico.
- [x] Bump de versão para v3.8.2 e atualização do Changelog.
- [x] Atualização do cache no `sw.js` para v3.8.2.

### 📝 Registro de Tarefas (v3.8.1)
- [x] Backup manual dos arquivos `index.html`, `dados.json` e `resumo.md`.
- [x] Bump de versão de v3.8.0 para v3.8.1 no `version.json` e `index.html`.
- [x] Atualização do Changelog visual e interno no `index.html`.
- [x] Geração do arquivo `relatorio_historico_clientes.md` com histórico individual detalhado.
- [x] Registro desta atividade no `resumo.md`.
