/* Espera o HTML ser totalmente carregado antes de rodar o script
   Isso é garantido pelo atributo 'defer' na tag <script> no HTML,
   mas usar 'DOMContentLoaded' é uma boa prática adicional.
*/
document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA DO SISTEMA DE ABAS ---
    
    // 1. Encontra todos os botões de aba
    const tabs = document.querySelectorAll('.tab-button');
    // 2. Encontra todos os conteúdos de aba
    const tabContents = document.querySelectorAll('.tab-content');

    // 3. Adiciona um "ouvinte" de clique para cada botão de aba
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            
            // 4. Remove a classe 'active' de todas as abas e conteúdos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 5. Adiciona a classe 'active' apenas na aba que foi clicada
            tab.classList.add('active');
            
            // 6. Pega o valor do atributo 'data-tab' (ex: "prescricoes")
            const targetId = tab.getAttribute('data-tab'); 
            
            // 7. Usa esse valor para encontrar o elemento pelo ID (ex: #prescricoes)
            //    e adiciona a classe 'active' nele para mostrá-lo.
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- LÓGICA DO FORMULÁRIO DE PRESCRIÇÃO (BÔNUS) ---

    // O formulário de prescrição agora contém a anamnese detalhada, mas a lógica básica é mantida.
    
    // 1. Pega os elementos do formulário de alergia (Exemplo de lógica de campo condicional)
    const alergiaSim = document.getElementById('alergia_sim');
    const alergiaNao = document.getElementById('alergia_nao');
    const alergiaDetalhes = document.getElementById('alergia_detalhes');

    // 2. Ouve mudanças no botão "Sim"
    alergiaSim.addEventListener('change', () => {
        if (alergiaSim.checked) {
            // Este campo não existe mais no HTML atual, mas mantemos a lógica caso seja reintroduzido.
            // alergiaDetalhes.style.display = 'block'; 
        }
    });

    // 3. Ouve mudanças no botão "Não"
    alergiaNao.addEventListener('change', () => {
        if (alergiaNao.checked) {
            // Este campo não existe mais no HTML atual.
            // alergiaDetalhes.style.display = 'none'; 
            // alergiaDetalhes.value = ''; 
        }
    });

    // 4. Lógica para "salvar" o formulário de Prescrição/Anamnese
    const formPrescricao = document.getElementById('form-prescricao');
    formPrescricao.addEventListener('submit', (event) => {
        // Impede o recarregamento da página (comportamento padrão do form)
        event.preventDefault(); 
        
        alert('Anamnese e Prescrição salvas com sucesso!');
        // Aqui você adicionaria a lógica para enviar os dados para um servidor
    });
    
    // 5. Lógica para o novo formulário de dados pessoais (exemplo)
    const formPessoais = document.getElementById('form-pessoais');
    if (formPessoais) {
        formPessoais.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Dados pessoais atualizados com sucesso!');
            // Implementar aqui a lógica de envio dos dados
        });
    }

    // 6. Lógica para o botão "Nova Consulta" (exemplo)
    const novaConsultaBtn = document.getElementById('novaConsultaBtn');
    novaConsultaBtn.addEventListener('click', () => {
        alert('Abrindo tela de nova consulta...');
    });
    
});