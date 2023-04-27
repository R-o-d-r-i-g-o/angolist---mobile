import React from 'react';
import color from '../../utils/colors';
import {PageTemplate} from '../../templates/pageTemplate';
import {AreaChart, Grid} from 'react-native-svg-charts';
import {YAxis} from 'react-native-svg-charts';

import {StyleSheet} from 'react-native';
import {SelectCountry} from 'react-native-element-dropdown';

import {Circle} from 'react-native-svg';
import {Path} from 'react-native-svg';
import {Text, View} from 'react-native';

import {
  ChartContainer,
  XLabel,
  LabelText,
  DropDownBlock,
  MainBlock,
  MainTitle,
  MainText,
  HeadLine,
} from './styles';

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

const data = [null, 1, 5, 7, 7, 9, null];

export const SkillRanks = () => {
  const labels = ['Telas', 'Acess.', 'Dispo.', 'Satur.', 'Perfo.'];

  return (
    <PageTemplate mainText={'Pontuação'}>
      <>
        <ChartContainer>
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
        </ChartContainer>
        <XLabel>
          {labels.map(label => (
            <LabelText key={label}>{label}</LabelText>
          ))}
        </XLabel>
        <DropDownBlock>
          <SelectCountryScreen />
        </DropDownBlock>
        <MainBlock>
          <MainTitle>
            <MainText>Feedback</MainText>
          </MainTitle>
          <HeadLine>Fluxo de telas</HeadLine>


        </MainBlock>
      </>
    </PageTemplate>
  );
};

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

const local_data = [
  {
    value: '1',
    lable: 'teste 1',
  },
  {
    value: '2',
    lable: 'Batman',
  },
  {
    value: '3',
    lable: 'tese de mestrado',
  },
  {
    value: '4',
    lable: 'avião',
  },
  {
    value: '5',
    lable: 'Country 5',
  },
];

const SelectCountryScreen = () => {
  const [country, setCountry] = React.useState('1');

  return (
    <SelectCountry
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      maxHeight={200}
      value={country}
      data={local_data}
      valueField="value"
      labelField="lable"
      imageField=""
      placeholder=""
      onChange={e => {
        setCountry(e.value);
      }}
    />
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  dropdown: {
    tintColor: color.baseBrown,
    height: 35,
    width: 120,
    backgroundColor: color.baseOrange,
    borderColor: color.baseBrown,
    borderWidth: 3,
    borderRadius: 20,
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    color: color.baseBrown,
    fontSize: 12,
    marginLeft: 8,
  },
});
