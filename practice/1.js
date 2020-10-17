//En el editor de código, las funciones prepareTeay getTeaya están definidas. Llame a la getTeafunción para obtener 40 tazas de té para el equipo y guárdelas en la tea4TeamFCCvariable.

const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4TeamFCC = getTea(40);