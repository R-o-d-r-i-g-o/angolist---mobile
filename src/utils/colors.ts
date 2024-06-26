interface iColor {
  baseWhite: string;
  baseBrown: string;
  darkBrown: string;
  baseOrange: string;
  darkOrange: string;
  lightOrange: string;
  baseYellow: string;
  baseGray: string;

  // message popUps only
  warning: string;
  reproved: string;
  passed: string;
}

const color: iColor = {
  baseWhite: '#ffffff',
  baseBrown: '#9a3609',
  darkBrown: '#D5751B',
  baseOrange: '#fa9c27',
  darkOrange: '#d5751b',
  lightOrange: '#fbc178',
  baseYellow: '#ffff00',
  baseGray: '#d9d9d9',

  // message popUps only
  warning: '#E4D00A',
  reproved: '#FF0000',
  passed: '#7CFC00',
};

export default color;
