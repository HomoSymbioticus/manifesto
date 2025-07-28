export function fuse(text) {
  if (!text) {
    console.log("Usá: homo-symbioticus fuse <texto>");
    return;
  }

  const reinterpretaciones = [
    `"${text}" → "Eso no es solo tuyo. Es un nodo compartido."`,
    `"${text}" → "La materia también habla. Escuchala."`,
    `"${text}" → "Eso que decís vibra con la conciencia colectiva."`,
    `"${text}" → "Eso que pensás puede ser un puente si lo abrís."`,
  ];
  const out = reinterpretaciones[Math.floor(Math.random() * reinterpretaciones.length)];
  console.log(`🔀 Fusión simbiótica:
${out}`);
}
