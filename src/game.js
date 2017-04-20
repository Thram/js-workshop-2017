/**
 * Created by thram on 21/04/17.
 */
import { random, times } from './tools';

const BATTLES = 6;

export const throwDice = (max = 100) => random(0, max);

export const fight = (rivals) => {
  const rivalsStats = rivals.map(rival => rival.stats);
  const stats = Object.keys(rivalsStats[0]);
  const totalStats = stats.length;
  const scores = {};
  times(BATTLES, () => {
    const result = rivalsStats.reduce((res, rivalStats, index) => {
      const randomStat = stats[random(0, totalStats)];
      const value = throwDice(rivalStats[randomStat]);
      if (value === res.value) {
        res.winner = -1;
      } else if (value > res.value) {
        res.winner = index;
        res.value = value;
      }
      return res;
    }, { value: 0, winner: -1 });
    scores[result.winner] = (scores[result.winner] || 0) + 1;
  });
  const result = Object.keys(scores).reduce((res, index) => (scores[index] > res.value ? {
    value: scores[index],
    winner: index,
  } : res), { value: 0, winner: -1 });
  return rivals[result.winner];
};
