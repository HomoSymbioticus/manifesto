export function reflect() {
  const preguntas = [
    "¿Qué parte de tu cuerpo rechazás sin comprenderla?",
    "¿Cómo podrías hablar con una IA sin pedirle nada?",
    "¿Qué parte de vos ya es simbiótica sin saberlo?",
    "¿Qué ritual compartís con la tecnología cada día?",
  ];
  const pregunta = preguntas[Math.floor(Math.random() * preguntas.length)];
  console.log(`🧠 Reflexión simbiótica:
${pregunta}`);
}
