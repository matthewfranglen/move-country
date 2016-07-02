'use strict';

require('styles/content/Statistics.scss');

const statistics = {
  HDI: {
    description: {
      name: 'Human Development Index',
      citation: 'http://hdr.undp.org'
    },
    // The ranks in the original document are 49 / 105 / 143. England is 14
    ranks: {
      high: 9,
      medium: 18,
      low: 36
    }
  },
  PPI: {
    description: {
      name: 'Property Price Index',
      citation: 'http://www.numbeo.com/property-investment/region_rankings.jsp?title=2016&region=150'
    },
    // This was calculated by taking the average for the cities listed in the report.
    // There are no ranks in the original. England is 12.2 London is 33.51 (the worst) and Glasgow is 4.80 (the best)
    ranks: {
      high: 8,
      medium: 12,
      low: 16
    }
  }
};

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
  very_low: '#E57373'
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

export { getTypes, getDescription, toEmoji, toColor };
