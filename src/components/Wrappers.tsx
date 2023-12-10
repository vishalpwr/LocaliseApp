import React, { ReactNode } from 'react'

import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

export interface Props {
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const Container = ({
  children,
  backgroundColor,
  style,
}: Props) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>{children}</View>
  )
};

export const Row = ({
  children,
  backgroundColor,
  style,
}: Props) => {
  return (
    <View style={[styles.row, { backgroundColor }, style]}>
      {children}
    </View>
  )
};

export const SpaceBetweenRow = ({ children, backgroundColor, style }: Props) => {
  return (
    <View style={[styles.spaceBetweenRow, style, { backgroundColor }]}>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetweenRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})