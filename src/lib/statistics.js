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

const emoji = {
  high: '😎',
  medium: '😊',
  low: '😞',
  very_low: '😧'
};

const colors = {
  good: Color('#00FF00'),
  average: Color('#FFFF00'),
  bad: Color('#FF0000')
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
  const mix = Math.abs(rank - 0.5) * 2;
  const color = rank === 1   ? colors.good
              : rank > 0.5   ? colors.good.clone().mix(colors.average, mix)
              : rank === 0.5 ? colors.average
              : rank > 0     ? colors.bad.clone().mix(colors.average, mix)
              : colors.bad;

  return color.hslString();
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
