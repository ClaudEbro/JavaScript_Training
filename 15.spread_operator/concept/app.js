const brasilianRealMadrid = ['Ronaldo','Roberto Carlos','Flavio Conceçao'];
const brasilianFCBarcelona = ['Ronaldinho', 'Silvinho', 'Belleti', 'Edmilson'];
const brasilianMilanAC =['Rivaldo','Kaka'];

const brasilianTeam = brasilianMilanAC.concat(
    brasilianRealMadrid.concat(brasilianFCBarcelona)
);

const brasil1 = brasilianRealMadrid.concat(brasilianFCBarcelona);
const brasil = brasilianMilanAC.concat(brasil1);

const brasilianTeamSpread = [
    ...brasilianFCBarcelona,
    ...brasilianRealMadrid,
    ...brasilianMilanAC,
];