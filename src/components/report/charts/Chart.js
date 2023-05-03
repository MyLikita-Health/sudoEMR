import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// let data =
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveBar = ({
  data=[],layout='vertical'
}) => {
  return(
  <ResponsiveBar
  data={data}
  keys={['quantity']}
  indexBy="drug"
  margin={{ top: 10, right: 0, bottom: 50, left: 100 }}
  padding={0.3}
  colors={{ scheme: 'nivo' }}
  layout={layout}
  fill={[
    {
      match: {
        id: 'quantity',
      },
      id: 'dots',
    },
  ]}
  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
  axisTop={null}
  axisRight={null}
  axisBottom={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Drug',
    legendPosition: 'middle',
    legendOffset: 32,
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Quantity Sold',
    legendPosition: 'middle',
    legendOffset: -40,
  }}
  labelSkipWidth={12}
  labelSkipHeight={12}
  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
  legends={[]}
  animate={true}
  motionStiffness={90}
  motionDamping={15}
  />
)};

export default MyResponsiveBar;
