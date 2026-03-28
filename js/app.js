document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Modo Oscuro/Claro
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        // Cambiar el texto del botón
        if (body.classList.contains('light-mode')) {
            themeBtn.textContent = 'Modo Oscuro';
        } else {
            themeBtn.textContent = 'Modo Claro';
        }
    });

    // 2. Lógica del Botón Flotante (Scroll to top)
    const scrollBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        // Mostrar el botón si el usuario baja más de 300px
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // 3. Lógica del Cuestionario Interactivo
    const quizForm = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('quiz-result');

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Obtener los valores seleccionados
        const q1Value = document.getElementById('q1').value;
        const q2Value = document.getElementById('q2').value;
        const q3Value = document.getElementById('q3').value;
        // Validar respuestas
        let score = 0;
        if (q1Value === 'diccionario') score++;
        if (q2Value === 'urls') score++;
        if (q3Value === 'orm') score++;
        // Mostrar retroalimentación con estilos neón
        resultDiv.style.opacity = '1';

        // Lógica mejorada para el Cuestionario Final
        const totalPreguntas = 3;

        if (score === totalPreguntas) {
            // 1. Lanzar Confeti Neón
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#0ff', '#f0f', '#fff'] // Colores cian, magenta y blanco
            });

            // 2. Mensaje de éxito
            resultDiv.innerHTML = `¡Excelente! 🏆 ${score}/${totalPreguntas} <br> <span>¡Certificación asegurada!</span>`;
            resultDiv.style.color = 'var(--neon-cyan)';
            resultDiv.style.textShadow = '0 0 15px var(--neon-cyan)';
        }
        else if (score === 2) {
            // Casi perfecto: Efecto Oro/Amarillo (Etapa 3 vibes)
            resultDiv.innerHTML = `¡Buen intento! ⚡ ${score}/${totalPreguntas} <br> <span style="font-size: 0.8rem;">Casi lo logras. Revisa los detalles de la Etapa 4 sobre Django.</span>`;
            resultDiv.style.color = '#ffcc00';
            resultDiv.style.textShadow = '0 0 10px #ffcc00';
        }
        else {
            // Puntuación Baja: Efecto Magenta (Alerta)
            resultDiv.innerHTML = `Obtuviste ${score} de ${totalPreguntas}. <br> <span style="font-size: 0.8rem;">¡No te rindas! Repasa el manual e inténtalo de nuevo. 🛠️</span>`;
            resultDiv.style.color = 'var(--neon-magenta)';
            resultDiv.style.textShadow = '0 0 15px var(--neon-magenta)';
        }

// Hacer visible el mensaje con una pequeña animación de entrada
        resultDiv.style.opacity = '1';
        resultDiv.style.transform = 'translateY(0)';
    });
});
// Dentro de la lógica de validación de app.js podrías agregar:
// (Asumiendo que añades el select 'q3' al HTML)
const q3Value = document.getElementById('q3').value;
if (q3Value === 'else') score++;