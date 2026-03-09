const questions = [
  {
    question: "Who is the malicous hacker?",
    options: ["white hat", "black hat", "grey hat"],
    answer: "black hat"
  }
];

const quizDiv = document.getElementById("quiz");

questions.forEach((q, index) => {
  const container = document.createElement("div");
  container.innerHTML = `<p>${q.question}</p>`;

  q.options.forEach(option => {
    container.innerHTML += `
      <label>
        <input type="radio" name="q${index}" value="${option}">
        ${option}
      </label><br>
    `;
  });

  quizDiv.appendChild(container);
});

function submitQuiz() {
  let score = 0;

  questions.forEach((q, index) => {
    const answer = document.querySelector(`input[name="q${index}"]:checked`);
    if (answer && answer.value === q.answer) {
      score++;
    }
  });

  document.getElementById("result").innerText =
    `Score: ${score}/${questions.length}`;
}