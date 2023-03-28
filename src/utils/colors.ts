interface iColor {
  baseWhite: string;
  baseBrown: string;
  baseOrange: string;
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
  baseOrange: '#fa9c27',
  baseYellow: '#ffff00',
  baseGray: '#d9d9d9',

  // message popUps only
  warning: '#E4D00A',
  reproved: '#FF0000',
  passed: '#7CFC00',
};

export default color;
