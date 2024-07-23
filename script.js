let entrevistas = []; // Lista para armazenar entrevistas  

function adicionarEntrevista() {  
    const nome = document.getElementById('nome').value;  
    const sobrenome = document.getElementById('sobrenome').value;  
    const idade = document.getElementById('idade').value;  
    const sexo = document.getElementById('sexo').value;  
    const cidade = document.getElementById('cidade').value;  
    const depoimento = document.getElementById('depoimento').value;  
    const conhecimento = document.getElementById('conhecimento').value;  

    const entrevista = {  
        nome,  
        sobrenome,  
        idade,  
        sexo,  
        cidade,  
        depoimento,  
        conhecimento  
    };  

    entrevistas.push(entrevista);  
    atualizarTabela();  
    limparFormulario();  
}  

function atualizarTabela() {  
    const tabela = document.getElementById('tabelaEntrevistas').getElementsByTagName('tbody')[0];  
    tabela.innerHTML = ''; // Limpar a tabela existente  

    entrevistas.forEach(ent => {  
        const row = tabela.insertRow();  
        Object.values(ent).forEach(value => {  
            const cell = row.insertCell();  
            cell.appendChild(document.createTextNode(value));  
        });  
    });  
}  

function gerarPDFTodas() {  
    const { jsPDF } = window.jspdf;  

    const doc = new jsPDF();  
    let y = 10; // Posição inicial y para a primeira linha  

    entrevistas.forEach((ent, index) => {  
        doc.text(`Entrevista ${index + 1}`, 10, y); // Título para a entrevista  
        y += 10; // Avançar para baixo  
        doc.text(`Nome: ${ent.nome}`, 10, y);  
        y += 10;  
        doc.text(`Sobrenome: ${ent.sobrenome}`, 10, y);  
        y += 10;  
        doc.text(`Idade: ${ent.idade}`, 10, y);  
        y += 10;  
        doc.text(`Sexo: ${ent.sexo}`, 10, y);  
        y += 10;  
        doc.text(`Cidade: ${ent.cidade}`, 10, y);  
        y += 10;  
        doc.text(`Depoimento: ${ent.depoimento}`, 10, y);  
        y += 10;  
        doc.text(`Conhecimento: ${ent.conhecimento}`, 10, y);  
        y += 20; // Espaço extra entre entrevistas  
    });  

    doc.save('entrevistas.pdf'); // Nome do arquivo PDF  
}  

function limparFormulario() {  
    document.getElementById('nome').value = '';  
    document.getElementById('sobrenome').value = '';  
    document.getElementById('idade').value = '';  
    document.getElementById('sexo').value = '';  
    document.getElementById('cidade').value = '';  
    document.getElementById('depoimento').value = '';  
    document.getElementById('conhecimento').value = '';  
}