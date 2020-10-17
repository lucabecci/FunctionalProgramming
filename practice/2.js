// Prepare 27 tazas de té verde y 13 tazas de té negro y guárdelas en las variables tea4GreenTeamFCCy tea4BlackTeamFCC, respectivamente. Tenga en cuenta que la getTeafunción se ha modificado, por lo que ahora toma una función como primer argumento.
const prepareGreenTea = () => 'greenTea';

const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);


console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
