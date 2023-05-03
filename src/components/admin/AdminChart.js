import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const MyResponsiveBar = () => {
  return (
    <ResponsiveBar
      data={[
        {
          country: 'AD',
          Hospitals: 5,
          Pharmacies: 20,
          Doctors: 35,
          Patients: 200,
        },
        {
          country: 'AE',
          Hospitals: 13,
          Pharmacies: 30,
          Doctors: 171,
          Patients: 125,
        },
        {
          country: 'AF',
          Hospitals: 88,
          Pharmacies: 76,
          Doctors: 123,
          Patients: 200,
        },
        {
          country: 'AG',
          Hospitals: 30,
          Pharmacies: 25,
          Doctors: 36,
          Patients: 60,
        },
        {
          country: 'AI',
          Hospitals: 17,
          Pharmacies: 27,
          Doctors: 38,
          Patients: 84,
        },
        {
          country: 'AL',
          Hospitals: 10,
          Pharmacies: 144,
          Doctors: 72,
          Patients: 70,
        },
        {
          country: 'AM',
          Hospitals: 16,
          Pharmacies: 101,
          Doctors: 24,
          Patients: 80,
        },
      ]}
      keys={['Hospitals', 'Pharmacies', 'Doctors', 'Patients']}
      indexBy="country"
      margin={{top: 30, right: 100, bottom: 50, left: 50 }}
      padding={0.3}
      //   defs={[
      //     {
      //       id: 'dots',
      //       type: 'patternDots',
      //       background: 'inherit',
      //       size: 4,
      //       padding: 1,
      //       stagger: true,
      //     },
      //     {
      //       id: 'lines',
      //       type: 'patternLines',
      //       background: 'inherit',
      //       rotation: -45,
      //       lineWidth: 6,
      //       spacing: 10,
      //     },
      //   ]}
      //   fill={[
      //     {
      //       match: {
      //         id: 'Patients',
      //       },
      //       id: 'dots',
      //     },
      //     {
      //       match: {
      //         id: 'pharmacies',
      //       },
      //       id: 'lines',
      //     },
      //   ]}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Month',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Range',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default MyResponsiveBar;
