import React from 'react';
import color from '../../utils/colors';
import {labels} from '../../mocks/GraphicLabels';
import * as S from './styles';

import {YAxis} from 'react-native-svg-charts';
import {AreaChart, Grid} from 'react-native-svg-charts';

import {Circle} from 'react-native-svg';
import {Path} from 'react-native-svg';

interface DecoratorProps {
  x: (arg: number) => number;
  y: (arg: number) => number;
  data: number[];
}

interface LineProps {
  line: string;
}

const Line = (props: Partial<LineProps>) => {
  const {line} = props as LineProps;
  return <Path d={line} stroke={color.baseWhite} fill={'none'} />;
};

const Dots = (props: Partial<DecoratorProps>) => {
  const {x, y, data} = props as DecoratorProps;
  return (
    <>
      {data?.map((value, index) => {
        return (
          value && (
            <Circle
              key={index}
              cx={x(index)}
              cy={y(value)}
              r={5}
              stroke={color.baseWhite}
              fill={color.baseBrown}
            />
          )
        );
      })}
    </>
  );
};

const data = [null, 1, 5, 7, 7, 9, null];

const LineChartWithAverage = () => {
  return (
    <AreaChart
      style={{height: 180, width: '87%'}}
      data={data}
      gridMin={0}
      contentInset={{top: 30, bottom: 30}}
      gridMax={10}>
      <Grid />
      <Line />
      <Dots />
    </AreaChart>
  );
};

const Graph = () => {
  return (
    <>
      <S.ChartContainer>
        <YAxis
          data={data}
          contentInset={{top: 30, bottom: 30}}
          min={0}
          max={10}
          svg={{
            fill: 'grey',
            fontSize: 11,
          }}
          style={{marginRight: 5}}
          formatLabel={value =>
            `${value}`.length === 1 ? `  ${value}` : `${value}`
          }
        />
        <LineChartWithAverage />
      </S.ChartContainer>
      <S.XLabel>
        {labels.map(label => (
          <S.LabelText key={label}>{label}</S.LabelText>
        ))}
      </S.XLabel>
    </>
  );
};

export {Graph};
