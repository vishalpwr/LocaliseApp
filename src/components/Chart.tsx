import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Row } from './Wrappers'
import Colors from '../constants/Colors'

type chartData = {
  value: number,
  month: string,
}
interface ChartProps {
  data: chartData[],
}
export const BarChart = ({ data }: ChartProps) => {
  if (data?.length > 0) {
    return (
      <Row style={styles.container}>
        {data.map((item, index) => {
          const highlighted = data.length === index + 1 ? Colors.coral : Colors.barColor;
          return (
            <View key={index} style={styles.barOuter}>
              <View style={[styles.bar, {
                height: item.value, backgroundColor: highlighted
              }]} />
              <Text style={styles.text}>{item.month}</Text>
            </View>
          )
        })}
      </Row>
    )
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'baseline',
    height: 120,
  },
  barOuter: {
    flex: 1,
    alignItems: 'center',
  },
  bar: {
    height: 40,
    width: 30,
    borderRadius: 8,
    backgroundColor: Colors.barColor,
  },
  text: {
    color: Colors.barColor,
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
})