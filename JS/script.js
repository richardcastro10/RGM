// =============== WHATSAPP CONFIGURAÇÕES ===============

const WHATSAPP_NUMBER = '5513991039906'; // +55 13 99103-9906

// Mensagens personalizadas para cada serviço
const mensagensServicos = {
    'Canecas Personalizadas': 'Olá! Gostaria de saber mais sobre canecas personalizadas. Quais são as opções disponíveis e os valores?',
    'Garrafas Personalizadas': 'Olá! Tenho interesse em garrafas personalizadas. Podem me informar sobre os modelos, preços e prazo de entrega?',
    'Impressões': 'Olá! Gostaria de fazer orçamento para impressões (preto e colorido). Qual o prazo e qual o valor?',
    'Papelaria Personalizada': 'Olá! Estou interessado em papelaria personalizada (cartões de visita, flyers, envelopes). Podem me informar valores e prazos?',
    'Outros Serviços': 'Olá! Gostaria de saber mais sobre os outros serviços oferecidos. Quais serviços vocês realizam?'
};

// =============== FUNÇÃO WHATSAPP POR SERVIÇO ===============

function abrirWhatsAppServico(nomeServico) {
    const mensagem = mensagensServicos[nomeServico] || 'Olá! Gostaria de saber mais sobre seus serviços.';
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappURL, '_blank');
}

// =============== EVENT LISTENERS - SERVIÇOS ===============

document.addEventListener('DOMContentLoaded', function() {
    // Pega todos os cards de serviço
    const servicoCards = document.querySelectorAll('.servico-card');
    
    servicoCards.forEach(card => {
        // Pega o link "Saiba mais" dentro do card
        const link = card.querySelector('a');
        
        if (link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Pega o nome do serviço do h3
                const h3 = card.querySelector('h3');
                const nomeServico = h3 ? h3.textContent : 'Serviços RGM';
                
                // Abre WhatsApp com a mensagem correta
                abrirWhatsAppServico(nomeServico);
            });
        }
    });
});

// =============== WHATSAPP BUTTON GERAL ===============

const WHATSAPP_MESSAGE_GERAL = 'Olá! Gostaria de saber mais sobre os serviços da RGM Informatica.';

function abrirWhatsApp() {
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_GERAL)}`;
    window.open(whatsappURL, '_blank');
}

// Selecionar todos os botões WhatsApp
const botoesWhatsApp = document.querySelectorAll('.btn-whatsapp');

// Adicionar evento de clique em cada botão
botoesWhatsApp.forEach(botao => {
    botao.addEventListener('click', abrirWhatsApp);
});

// =============== SMOOTH SCROLL ===============

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Não prevenir default para links de serviços
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            // Verifica se é um link de seção (não de serviço)
            if (!this.closest('.servico-card')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        }
    });
});

// =============== BOTÃO VER SERVIÇOS ===============

const btnServicos = document.querySelector('.btn-servicos');
if (btnServicos) {
    btnServicos.addEventListener('click', function(e) {
        e.preventDefault();
        const servicosSection = document.getElementById('servicos');
        if (servicosSection) {
            servicosSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// =============== EFEITO HOVER NOS BOTÕES ===============

const todosOsBotoes = document.querySelectorAll('button');
todosOsBotoes.forEach(botao => {
    botao.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    botao.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// =============== BOTÃO CURRÍCULO ===============

const btnCurriculo = document.querySelector('.btn-curriculo');
if (btnCurriculo) {
    btnCurriculo.addEventListener('click', function(e) {
        e.preventDefault();
        const mensagem = 'Olá! Gostaria de fazer um currículo profissional. Qual o prazo e o valor?';
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappURL, '_blank');
    });
}

// =============== BOTÃO VER TODOS OS PRODUTOS ===============

const btnTodosProdutos = document.querySelector('.btn-todos');
if (btnTodosProdutos) {
    btnTodosProdutos.addEventListener('click', function(e) {
        e.preventDefault();
        const mensagem = 'Olá! Gostaria de ver todos os produtos disponíveis. Podem me mostrar as opções?';
        const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappURL, '_blank');
    });
}

console.log('✅ Script carregado com sucesso!');
console.log('📱 WhatsApp número: ' + WHATSAPP_NUMBER);
console.log('📧 Mensagens personalizadas por serviço ativadas!');