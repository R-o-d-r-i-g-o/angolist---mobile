import React from 'react';
import color from '../../utils/colors';
import {PageTemplate} from '../../templates/pageTemplate';
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

export const Line = (props: Partial<LineProps>) => {
  const {line} = props as LineProps;
  return <Path d={line} stroke={color.baseWhite} fill={'none'} />;
};

export const Dots = (props: Partial<DecoratorProps>) => {
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

export const SkillRanks = () => {
  const data = [null, 30, 10, 30, 20, 30, null]; // salvar com null nas extremidades pra não quebrar o front

  return (
    <PageTemplate mainText={'Pontuação'}>
      <AreaChart
        style={{height: 200, width: '94%'}}
        data={data}
        gridMin={-5}
        contentInset={{top: 30, bottom: 30}}
        // svg={{fill: '#ADD8E6'}}
        gridMax={40}>
        <Grid />
        <Line />
        <Dots />
      </AreaChart>
    </PageTemplate>
  );
};
