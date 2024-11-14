import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootStore} from '../../redux/store';
import {ProgressChart} from 'react-native-chart-kit';
import {Colors} from '../../config/theme';
import { chartConfig } from '../../config/Constant';
import { getPollingVote } from '../../config/helper';

const PollingChart = () => {
  const [chartData, setChartData] = useState<any>();
  const {poll} = useSelector((state: RootStore) => state.auth);

  useEffect(() => {
    if (poll.length) {
      var bjp = getPollingVote(poll, 'BJP');
      var cong = getPollingVote(poll, 'Congress');
      var aap = getPollingVote(poll, 'AAP');
      setChartData({
        labels: ['BJP', 'Cong', 'AAP'],
        data: [bjp, cong, aap],
      });
    }
  }, [poll]);
  return (
    <View style={styles.chart}>
      {chartData && (
        <ProgressChart
          data={chartData}
          width={Dimensions.get('window').width}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
      )}
    </View>
  );
};

export default PollingChart;

const styles = StyleSheet.create({
  chart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 20,
  },
});
