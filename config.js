/**
 * ============================================================
 * KAYLA CONSIGNADO - CONFIGURAÇÕES CENTRALIZADAS
 * Versão: 4.1.4 | Data: 2026-06-04
 * ============================================================
 * Este arquivo centraliza todas as configurações do sistema.
 * Para atualizar versão ou credenciais, edite APENAS este arquivo.
 * ============================================================
 */

const APP_CONFIG = {
    // ==========================================================
    // IDENTIFICAÇÃO DO APP
    // ==========================================================
    appName: 'Kayla Consignado',
    appShortName: 'Kayla',
    version: '4.1.4',
    versionDate: '2026-06-04',
    versionBuild: '20260604-001',
    
    // ==========================================================
    // SUPABASE - CONFIGURAÇÕES DE CONEXÃO
    // ==========================================================
    supabase: {
        url: 'https://xwwklngrkvdwgiinycvt.supabase.co',
        key: 'sb_publishable_2Viwv3t4SvejW4SEfvpxGA_5K5thi7S',
        project: 'xwwklngrkvdwgiinycvt'
    },
    
    // ==========================================================
    // AUTENTICAÇÃO E SESSÃO
    // ==========================================================
    auth: {
        requireLogoutOnClose: true,
        rememberMeDefault: false,
        sessionTimeout: 3600000
    },
    
    // ==========================================================
    // LIMITES DO PLANO GRÁTIS
    // ==========================================================
    limits: {
        freeClients: 3,
        freeProducts: 20,
        freeMaxKeys: 1
    },
    
    // ==========================================================
    // PLANOS E PREÇOS
    // ==========================================================
    plans: {
        free: {
            name: 'Grátis',
            price: 0,
            color: '#888'
        },
        pro: {
            name: 'Pro',
            price: 19.90,
            color: '#7c5cfc',
            features: [
                'Clientes ilimitados',
                'Produtos ilimitados',
                'Exportação PDF',
                'Sincronização em nuvem',
                'Perfil Usuário liberado',
                'Suporte prioritário'
            ]
        }
    },
    
    // ==========================================================
    // FUNCIONALIDADES ATIVAS
    // ==========================================================
    features: {
        enableBackup: false,
        enablePayments: false,
        enableScanner: true,
        enableOffline: false
    },
    
    // ==========================================================
    // INTERFACE E UI
    // ==========================================================
    ui: {
        primaryColor: '#7c5cfc',
        successColor: '#00c853',
        errorColor: '#ff1744',
        warningColor: '#ffab00',
        darkMode: true,
        animations: true
    }
};

/**
 * Atualiza todos os elementos de versão na página
 */
function updateVersionDisplay() {
    const versionElements = document.querySelectorAll('#hdr-ver, .app-version');
    versionElements.forEach(el => {
        if (el) el.textContent = 'v' + APP_CONFIG.version;
    });
    document.title = APP_CONFIG.appName + ' - v' + APP_CONFIG.version;
    console.log('%c ' + APP_CONFIG.appName + ' v' + APP_CONFIG.version + ' - Configurado!', 
        'color: #7c5cfc; font-weight: bold; font-size: 14px;');
}

/**
 * Retorna as informações de versão formatadas
 */
function getAppVersionInfo() {
    return {
        version: APP_CONFIG.version,
        name: APP_CONFIG.appName,
        date: APP_CONFIG.versionDate,
        build: APP_CONFIG.versionBuild
    };
}

if (document.readyState !== 'loading') {
    updateVersionDisplay();
} else {
    document.addEventListener('DOMContentLoaded', updateVersionDisplay);
}
