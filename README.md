# Verificador de Idade 🔎

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Um projeto simples para praticar conceitos fundamentais de JavaScript. A aplicação verifica a idade e o gênero de uma pessoa com base no ano de nascimento fornecido e exibe uma mensagem e uma imagem correspondente.

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como um exercício prático para solidificar o aprendizado em JavaScript, focando nos seguintes conceitos:

*   **Lógica Condicional:**
    *   O núcleo da aplicação utiliza `if`, `else if` e `else` para validar os dados de entrada (se o ano foi preenchido corretamente) e para determinar a faixa etária correta (bebê, jovem, adulto, idoso) com base na idade calculada.

*   **Manipulação do DOM (Document Object Model):**
    *   `document.querySelector()`: Utilizado para selecionar elementos HTML (como inputs, divs e botões) e permitir que o JavaScript leia seus valores ou modifique seu conteúdo.
    *   `document.createElement()`: Usado para criar um novo elemento `<img>` dinamicamente via JavaScript. Este elemento é então usado para exibir a foto correspondente à idade e ao gênero.
    *   `addEventListener()`: Para "escutar" o evento de clique no botão "Verificar" e disparar a função principal da aplicação.

*   **Trabalhando com Datas:**
    *   `new Date()` e `.getFullYear()`: Para obter o ano atual de forma automática, permitindo que o cálculo da idade seja sempre preciso.

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estrutura semântica da página.
*   **CSS3:** Estilização dos elementos e layout.
*   **JavaScript:** Lógica principal da aplicação e interatividade.

## 🏁 Como Executar

1.  Clone este repositório para a sua máquina.
2.  Navegue até a pasta do projeto.
3.  Abra o arquivo `index.html` no seu navegador de preferência.

---

Desenvolvido por **Leonardo Bruchez** como parte de seus estudos em desenvolvimento web.