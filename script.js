const questions = [
    { question: "Qual é o objetivo principal da ONU?", options: ["Promover a paz", "Aumentar a população", "Acabar com a guerra", "Criar um governo mundial"], answer: 0 },
    { question: "O que é a Agenda 2030?", options: ["Um plano de ação para o meio ambiente", "Uma reunião da ONU", "Um evento esportivo", "Um tratado de paz"], answer: 0 },
    { question: "Qual é a função do Programa das Nações Unidas para o Meio Ambiente (PNUMA)?", options: ["Promover a educação", "Proteger o meio ambiente", "Aumentar a produção de alimentos", "Construir cidades"], answer: 1 },
    { question: "Quantos ODS (Objetivos de Desenvolvimento Sustentável) existem?", options: ["10", "12", "17", "20"], answer: 2 },
    { question: "Qual é a principal causa das mudanças climáticas?", options: ["Desmatamento", "Poluição", "Queimadas", "Todas as anteriores"], answer: 3 },
    { question: "O que significa 'sustentabilidade'?", options: ["Crescimento econômico", "Preservação dos recursos para o futuro", "Aumento do consumo", "Desigualdade social"], answer: 1 },
    { question: "O que a ONU faz para combater a pobreza?", options: ["Cria leis", "Aumenta impostos", "Implementa programas de ajuda", "Faz discursos"], answer: 2 },
    { question: "Qual é a convenção internacional sobre mudança climática?", options: ["Acordo de Paris", "Protocolo de Kyoto", "Convenção de Viena", "Carta da Terra"], answer: 0 },
    { question: "Qual é a maior parte da água do planeta?", options: ["Água doce", "Água salgada", "Água poluída", "Água subterrânea"], answer: 1 },
    { question: "O que é a biodiversidade?", options: ["Variedade de espécies", "Quantidade de água", "Tamanho das florestas", "Número de cidades"], answer: 0 },
    { question: "Qual é o impacto do plástico nos oceanos?", options: ["Aumenta a vida marinha", "Diminui a poluição", "Prejudica a fauna e flora", "Não tem impacto"], answer: 2 },
    { question: "O que é desenvolvimento sustentável?", options: ["Desenvolver apenas a economia", "Desenvolver sem pensar no futuro", "Atender às necessidades do presente sem comprometer o futuro", "Desenvolver a tecnologia"], answer: 2 },
    { question: "Qual é a maior floresta tropical do mundo?", options: ["Floresta Amazônica", "Floresta do Congo", "Floresta Boreal", "Floresta de Taiga"], answer: 0 },
    { question: "O que é um ecossistema?", options: ["Um tipo de animal", "Um habitat natural", "Uma interação entre organismos e o ambiente", "Uma planta"], answer: 2 },
    { question: "Qual país é conhecido por suas políticas ambientais avançadas?", options: ["Estados Unidos", "Suécia", "China", "Índia"], answer: 1 },
    { question: "O que é a pegada ecológica?", options: ["A área de floresta", "O impacto ambiental das atividades humanas", "O número de árvores cortadas", "A quantidade de água utilizada"], answer: 1 },
    { question: "Qual é a principal fonte de energia renovável?", options: ["Carvão", "Petróleo", "Solar", "Nuclear"], answer: 2 },
    { question: "O que as florestas fazem pelo meio ambiente?", options: ["Produzem oxigênio", "Poluem o ar", "Aumentam a temperatura", "Diminui a biodiversidade"], answer: 0 },
    { question: "O que é reciclagem?", options: ["Descartar lixo", "Reutilizar materiais", "Queimar resíduos", "Sofrer degradação"], answer: 1 },
    { question: "Qual é o maior desafio ambiental do século XXI?", options: ["Poluição", "Mudanças climáticas", "Desmatamento", "Extinção de espécies"], answer: 1 }
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = '';

document.getElementById('start-btn').addEventListener('click', () => {
    playerName = document.getElementById('player-name').value;
    if (playerName.trim() === '') {
        alert('Por favor, digite seu nome!');
        return;
    }
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById('quiz-screen').classList.add('hidden');
        document.getElementById('credits').classList.remove('hidden');
        alert(`Quiz terminado! ${playerName}, sua pontuação é ${score}`);
    }
});

document.getElementById('check-btn').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        if (answerIndex === questions[currentQuestionIndex].answer) {
            score++;
            document.getElementById('score').textContent = `Pontuação: ${score}`;
            alert('Resposta correta!');
        } else {
            alert('Resposta incorreta!');
        }
    } else {
        alert('Selecione uma opção!');
    }
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    question.options.forEach((option, index) => {
        options.innerHTML += `
            <label class="option">
                <input type="radio" name="option" value="${index}">
                ${option}
            </label>
        `;
    });
}
