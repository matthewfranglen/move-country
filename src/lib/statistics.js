'use strict';

import Color from 'color';

import statistics from 'json!../data/statistics.json';
import countries from 'json!../data/europe.geo.json';

const statisticsByType = Object.keys(statistics)
    .reduce((stats, type) => {
        stats[type] = countries.features
          .filter(country => type in country.properties)
          .map(country => country.properties[type]).sort((a, b) => a - b);
        return stats;
    }, {});

console.log(statisticsByType);

const emoji = {
  high: '😎',
  medium: '😊',
  low: '😞',
  very_low: '😧'
};

const colors = {
  good: '#00FF00',
  average: '#FFFF00',
  bad: '#FF0000'
};

function getTypes () {
  return Object.keys(statistics);
}

function getDescription (type) {
  return statistics[type].description;
}

function toEmoji (value, type) {
  return emoji[toNamedRank(value, type)];
}

function toColor (value, type) {
  const rank = toNumericRank(value, type);

  if (rank === 1) {
    return colors.good;
  }
  if (rank > 0.5) {
    return Color(colors.average).mix(Color(colors.good), (rank - 0.5) * 2).hslString();
  }
  if (rank === 0.5) {
    return colors.average;
  }
  if (rank > 0) {
    return Color(colors.average).mix(Color(colors.bad), (0.5 - rank) * 2).hslString();
  }
  return colors.bad;
}

function toNamedRank (value, type) {
  const rank = toNumericRank(value, type);
  return rank >= 0.75 ? 'high'
       : rank >= 0.5  ? 'medium'
       : rank >= 0.25 ? 'low'
       : 'very_low';
}

function toNumericRank (value, type) {
  if (! type) {
    return;
  }

  const index = statisticsByType[type].indexOf(value);
  if (index === -1) {
    return 1;
  }

  const rank = 1 - (index / (statisticsByType[type].length - 1));

  return rank;
}

export { getTypes, getDescription, toEmoji, toColor, toNamedRank };
