const instruments = [
  ["Violão", ["E", "B", "G", "D", "A", "E"]],
  ["Contrabaixo - 4 cordas", ["E", "A", "D", "G"]],
  ["Contrabaixo - 5 cordas", ["B", "E", "A", "D", "G"]],
  ["Contrabaixo - 6 cordas", ["B", "E", "A", "D", "G", "C"]],
];

const singleNotes = ["C", "D", "E", "F", "G", "A", "B"];
const fullNotes = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const scales = {
  maior: [2, 2, 1, 2, 2, 2, 1],
  menor: [2, 1, 2, 2, 1, 2, 2],
  diminuta: [2, 2, 1, 2, 2, 2, 1],
};

function scaleMounted(note, scale) {
  const formula = scales[scale];

  let finish = false;
  const newScale = [note];
  let positionNote = fullNotes.indexOf(note);
  formula.forEach((item) => {
    positionNote += item;

    if (positionNote >= fullNotes.length) positionNote -= fullNotes.length;

    newScale.push(fullNotes[positionNote]);
  });

  return newScale;
}

function triade(note) {
  const newScale = [];
  newScale.push(scale[0]);
  newScale.push(scale[2]);
  newScale.push(scale[4]);
  return newScale;
}

function tetrade(note) {
  const newScale = [];
  newScale.push(scale[0]);
  newScale.push(scale[2]);
  newScale.push(scale[4]);
  newScale.push(scale[6]);
  return newScale;
}

export { singleNotes, fullNotes, instruments, scales };
