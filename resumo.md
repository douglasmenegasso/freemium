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

---
**Última Atualização:** 30 de Maio de 2026
**IA Responsável:** Claude (Anthropic) — claude-sonnet-4-6
**Conta Conectada:** Douglas Menegasso
