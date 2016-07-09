'use strict';

const statistics = {
  HDI: {
    description: {
      name: 'Human Development Index',
      detail: 'The Human Development Index (HDI) was created to emphasize that expanding human choices should be the ultimate criteria for assessing development results. Economic growth is a mean to that process, but is not an end by itself. The HDI can also be used to question national policy choices, asking how two countries with the same level of GNI per capita can end up with different human development outcomes. For example, Malaysia has GNI per capita higher than Chile, but in Malaysia, life expectancy at birth is about 7 years shorter and expected years of schooling is 2.5 years shorter than Chile, resulting in Chile having a much higher HDI value than Malaysia. These striking contrasts can stimulate debate about government policy priorities.',
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
      detail: 'Price to Income Ratio is the basic measure for apartment purchase affordability (lower is better). It is the ratio of median apartment prices to median familial disposable income, expressed as years of income. The formula uses net disposable family income and assumes that the average apartment has 90 square meters and its price per square meter is the average price of square meter in city center and outside of city center. Unfortunately this metric has been provided per city, so to calculate the country index the average of the city values has been used.',
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
