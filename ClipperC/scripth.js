/* ====== Seleciona elementos HTML ====== */
const calendario = document.getElementById('calendario');
const modal = document.getElementById('modal');
const dataSelecionada = document.getElementById('dataSelecionada');
const fechar = document.getElementById('fechar');
const salvar = document.getElementById('salvar');
let diaEscolhido = null; // Variável para guardar o dia selecionado

/* ====== Gera um calendário simples para o mês atual ====== */
const hoje = new Date();
const ano = hoje.getFullYear();
const mes = hoje.getMonth();
const diasNoMes = new Date(ano, mes + 1, 0).getDate(); // Quantidade de dias no mês

for (let dia = 1; dia <= diasNoMes; dia++) {
    const divDia = document.createElement('div'); // Cria uma célula de dia
    divDia.classList.add('dia');
    divDia.textContent = dia; // Número do dia
    divDia.addEventListener('click', () => {
        // Salva e exibe a data escolhida
        diaEscolhido = `${dia}/${mes + 1}/${ano}`;
        dataSelecionada.textContent = `Data: ${diaEscolhido}`;
        modal.style.display = 'flex'; // Mostra o pop-up
    });
    calendario.appendChild(divDia); // Adiciona o dia ao calendário
}

/* ====== Fecha o modal ====== */
fechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

/* ====== Salva o horário escolhido ====== */
salvar.addEventListener('click', () => {
    const hora = document.getElementById('hora').value;
    if (hora) {
        alert(`Agendamento feito para ${diaEscolhido} às ${hora}`);
        modal.style.display = 'none';
    } else {
        alert('Por favor, escolha um horário.');
    }
});
