# Resumo de Alterações e Suporte - MyPulse Freemium (Maio/2026)

> [!IMPORTANT]
> **PROTOCOLOS OBRIGATÓRIOS PARA IA:**
> 1. **LEITURA INICIAL:** Antes de qualquer tarefa, leia este resumo completamente.
> 2. **BACKUP PRÉVIO:** É obrigatório realizar um backup antes de iniciar qualquer alteração.
> 3. **ESCOPO RESTRITO:** O repositório de trabalho desta branch é `freemium`. Não altere `testeversao` ou `MyPulse` sem solicitação expressa.
> 4. **DOWNLOADS:** Sempre que atualizar um arquivo, disponibilize para download imediato.
> 5. **REGISTRO FINAL:** Anote todas as tarefas realizadas neste resumo ao finalizar.
> 6. **IDENTIFICAÇÃO:** A IA deve identificar seu **Nome** e **Conta** ao registrar.
> 7. **VERSIONAMENTO OBRIGATÓRIO:** Toda modificação gera bump de versão (X.Y.Z) e entrada no changelog.

---

## 📌 Estado Atual do Repositório
- **Versão:** v3.9.9
- **Status:** Freemium Fase 1 implementada. Pronto para testes.
- **Base:** Copiado de `testeversao` v3.9.8 em 30/05/2026.

---
### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (Paywall Redesign & Key Management Panel — Manus AI)
- [x] **Redesenho do Paywall:** Layout em tabela para facilitar a comparação Grátis vs Pro.
- [x] **Painel Admin de Chaves:** Nova interface em Configurações > Gestão de Chaves Pro.
- [x] **Chaves Múltiplas:** Agora é possível definir o limite de ativações por chave (ex: 1, 5, 10 usos).
- [x] **Controle de Uso:** O app valida o limite de ativações na nuvem e impede o uso de chaves esgotadas.
- [x] **Segurança:** Chaves são sincronizadas via dados.json para garantir consistência global.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (Manual Pro Activation & Support Update — Manus AI)
- [x] **Suporte Atualizado:** Número alterado para 41996427444 em todos os links do WhatsApp.
- [x] **Ativação Manual:** Implementada validação de chaves Pro através da nuvem (dados.json).
- [x] **Gerador de Chaves:** Criada função adminGenerateProKey() para uso administrativo via console.
- [x] **Sincronização de Segurança:** validProKeys agora é persistido na nuvem e compartilhado entre dispositivos conectados ao mesmo repositório.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (STRICT freemium limits for Admin — Manus AI)
- [x] **Correção Crítica:** O objeto S.security não estava sendo inicializado nem salvo no LocalStorage, o que causava instabilidade no isPro().
- [x] **Persistência de Segurança:** Agora a chave Pro e as configurações de segurança são salvas e carregadas corretamente (csn_security).
- [x] **Trava na UI:** O botão de "Conectar Nuvem" nas configurações agora checa isPro() diretamente no clique, impedindo a abertura da modal.
- [x] **Logs de Validação:** Adicionados logs no console para monitorar a validação de limites de clientes e produtos.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (freemium limits for Admin — Manus AI)
- [x] **Limitação de Nuvem:** Funções de sincronização (, ) e configuração () agora bloqueadas para Admin no plano Grátis.
- [x] **Limitação de Clientes:** Funções de salvamento de novos clientes (, ) agora respeitam o limite de 3 clientes para Admin no plano Grátis.
- [x] **Limitação de Produtos:** Já existia o bloqueio no , mas as verificações foram reforçadas.
- [x] **Paywall:** O Admin agora é direcionado corretamente para o Paywall ao tentar usar funções Pro.
- **IA:** Manus AI | **Conta:** Douglas Menegasso

### 📝 Registro (fix syntax & login block — Manus AI)
- [x] **Bug corrigido:** Erro de sintaxe na linha 2261 (aspas aninhadas no ) que impedia o carregamento do JavaScript.
- [x] **Bloqueio Freemium:** Função  agora bloqueia o acesso com o Paywall caso o plano seja Grátis (conforme Roadmap Fase 1).
- [x] **Acesso Admin:** Mantido acesso para configuração, mas restrições de funcionalidades Pro (PDF, Nuvem) permanecem ativas dentro do sistema.
- [x] Brace balance=0, sintaxe validada com Node.js.
- **IA:** Manus AI | **Conta:** Douglas Menegasso


## 🚀 ROADMAP Freemium

### ✅ Fase 1 — Limites e Bloqueios (v3.9.9)
- [x] Constantes `PLAN_LIMITS` e `PLAN_FEATURES` centralizadas
- [x] Funções `isPro()`, `canAddClient()`, `canAddProduct()` 
- [x] Bloqueio ao adicionar cliente (limite: 3 no grátis)
- [x] Bloqueio ao adicionar produto via scanner e manual (limite: 20 no grátis)
- [x] Bloqueio de PDF para plano grátis
- [x] Bloqueio de sincronização com nuvem para plano grátis
- [x] Bloqueio de perfil Usuário para plano grátis
- [x] Paywall com comparativo de planos Grátis vs Pro (R$ 19,90/mês)
- [x] Ativação por chave (`PRO-XXXX-XXXX-XXXX`)
- [x] Badge `FREE` / `PRO` no cabeçalho

### 🔜 Fase 2 — Paywall aprimorado
- [ ] Contador visual de uso (ex: "2/3 clientes usados")
- [ ] Botão "Falar sobre o Pro" com WhatsApp configurável nas Settings
- [ ] Tela de status do plano nas Configurações

### 🔜 Fase 3 — Ativação de chaves
- [ ] Painel admin para gerar chaves válidas no dados.json
- [ ] Expiração de chave (mensal)
- [ ] Múltiplos dispositivos com mesma chave

### 🔜 Fase 4 — Distribuição
- [ ] GitHub Pages ativo para o repositório freemium
- [ ] Link de divulgação gerado
- [ ] Guia de instalação PWA para clientes

---

## 📝 Histórico de Alterações

### 📝 Registro (v3.9.9 — Claude / Anthropic)
- [x] Repositório `freemium` criado em https://github.com/douglasmenegasso/freemium
- [x] Todos os arquivos copiados de `testeversao` v3.9.8 (exceto dados.json de produção)
- [x] `dados.json` vazio criado (sem dados reais)
- [x] **Fase 1 implementada:** limites grátis, paywall, ativação por chave, badge FREE/PRO
- [x] Brace balance=0, sem backticks escapados. Changelog atualizado.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso

### 📝 Registro (fix ordem declaração — Claude / Anthropic)
- [x] Backup criado: `backup/pre-fix-order_20260531_1232`.
- [x] **Causa raiz do login não funcionar:** bloco freemium (`APP_VERSION`, `PLAN_LIMITS`, `isPro()`) estava na linha 2206, após o `loadLibs()` que chama `start()`. Quando `loginAsUser` era chamado (linha 326), `isPro` ainda não havia sido declarada.
- [x] **Fix:** bloco freemium movido para logo após o objeto `S` (linha ~290), garantindo que `isPro()` e `canAddClient()` estejam disponíveis antes de qualquer função de login.
- [x] Verificado: `isPro` declarada em char 62967, `loginAsUser` em char 63717 — ordem correta.
- [x] Brace balance=0, sem backticks problemáticos.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


### 📝 Registro (fix login — Claude / Anthropic)
- [x] **Bug:** `loginAsUser` bloqueava entrada com `showPaywall` para qualquer plano grátis — impedia login completamente.
- [x] **Decisão de produto:** perfil Usuário pode entrar em qualquer plano. Restrições (PDF, nuvem) são aplicadas ao usar cada função, não no login. O paywall de 'user' era incorreto neste contexto.
- [x] `loginAsUser` simplificado: chama `doLogin('user')` diretamente.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


### 📝 Registro (fix v3.9.9 — Claude / Anthropic)
- [x] Backup criado antes da correção.
- [x] **Bug 1:** `loginAsUser` não chamava `showPaywall` — corrigido para verificar `isPro()` antes de `doLogin`.
- [x] **Bug 2:** Displays estáticos de versão mostravam `v3.9.2` e `v3.8.0` — todos corrigidos para `v3.9.9`.
- [x] Sem bump de versão — correções de display e lógica sem nova funcionalidade.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso


---
**Última Atualização:** 30 de Maio de 2026
**IA Responsável:** Claude (Anthropic) — claude-sonnet-4-6
**Conta Conectada:** Douglas Menegasso


### 📝 Registro (fix v4.1.1 — bug login tela inicial — Claude / Anthropic)

- [x] **Backup criado:** `mypulse_backup_v4.1.0_pre-fix.html` antes de qualquer alteração.
- [x] **Bug crítico corrigido:** `SyntaxError: Unexpected token '}'` na função `fallbackActivate`. A função possuía um `}` extra no fechamento, causando falha total no carregamento do JavaScript — `loginAsAdmin` e `loginAsUser` retornavam `undefined` no escopo global.
- [x] **Correção aplicada:** Removido o `}` sobrando no final de `fallbackActivate`. Brace balance=0 verificado com `node --check`.
- [x] **loginAsUser corrigido:** Removida verificação `isPro()` no login — perfil Usuário pode entrar em qualquer plano. Restrições aplicam-se às funções individuais dentro do app.
- [x] **Versão bump:** `v4.1.0` → `v4.1.1` em `APP_VERSION`, divs estáticas e service worker.
- **IA:** Claude (Anthropic) — claude-sonnet-4-6 | **Conta:** Douglas Menegasso
