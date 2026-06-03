// Configurações do Sistema Kayla - Venda Consignada
const APP_CONFIG = {
    version: '4.1.3',
    versionDate: '2026-06-03',
    appName: 'Kayla Consignado',
    
    // Supabase
    supabase: {
        url: 'https://xwwklngrkvdwgiinycvt.supabase.co',
        key: 'sb_publishable_2Viwv3t4SvejW4SEfvpxGA_5K5thi7S'
    },
    
    // Sistema de Login
    auth: {
        requireLogoutOnClose: true,  // true = desloga ao fechar
        rememberMeDefault: false,     // false = checkbox desmarcado por padrão
        sessionTimeout: 3600000       // 1 hora em milissegundos (opcional)
    },
    
    // Funcionalidades
    features: {
        enableBackup: true,
        enablePayments: false,
        maxUsersFree: 1
    }
};

// Atualiza elementos de versão na página
function updateVersionDisplay() {
    const versionElements = document.querySelectorAll('[id*="version"], [class*="version"]');
    versionElements.forEach(el => {
        if (el.id === 'APP_VERSION' || el.classList.contains('app-version')) {
            el.textContent = `v${APP_CONFIG.version}`;
        }
    });
}

// Inicializa configurações
document.addEventListener('DOMContentLoaded', updateVersionDisplay);
