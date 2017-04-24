import { random, times, reduce } from './tools';

const BATTLES = 6;

export const throwDice = (max = 100) => random(0, max);

export const fight = (rivals) => {
  const stats = Object.keys(rivals[0].stats);
  const totalStats = stats.length;

  const selectStat = (rival) => {
    const stat = stats[random(0, totalStats - 1)];
    return { id: rival.id, stat, value: throwDice(rival.stats[stat]) };
  };

  const battleResult = (res, rival) => (rival.value === res.value
    ? { id: 'draw', value: -1 }
    : {
      ...res,
      ...(rival.value > res.value ? rival : {}),
    });

  const matchResult = (res, battle) => {
    res[battle.id] = (res[battle.id] || 0) + 1;
    return res;
  };

  const battles = times(BATTLES, () => rivals
    .map(selectStat)
    .reduce(battleResult, { id: 'draw', value: -1 }));
  const result = battles.reduce(matchResult, {});

  return [reduce(result, (res, value, key) => (
    value > res.score ? { winner: key, score: value } : res
  ), { score: -1 }), battles];
};
