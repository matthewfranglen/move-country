'use strict';

import statistics from 'json!../data/statistics.json';

const emoji = {
  high: '😎',
  medium: '😊',
  low: '😞',
  very_low: '😧'
};

const colors = {
  high: '#81C784',
  medium: '#FFF176',
  low: '#FF8A65',
  very_low: '#F06292'
};

function getTypes () {
  return Object.keys(statistics);
}

function getDescription (type) {
  return statistics[type].description;
}

function toEmoji (value, type) {
  return emoji[toRank(value, type)];
}

function toColor (value, type) {
  return colors[toRank(value, type)];
}

function toRank (value, type) {
  if (! type) {
    return;
  }
  var ranks = statistics[type].ranks;

  if (value <= ranks.high) {
    return 'high';
  }
  if (value <= ranks.medium) {
    return 'medium';
  }
  if (value <= ranks.low) {
    return 'low';
  }
  return 'very_low';
}

export { getTypes, getDescription, toEmoji, toColor, toRank };
