import { SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Row, SpaceBetweenRow } from '../components/Wrappers'
import Feather from 'react-native-vector-icons/Feather'
import { BarChart } from '../components/Chart';
import { chartData, expensesArray } from '../constants/dummyData';
import Colors from '../constants/Colors';
import Icon, { Icons } from '../components/Icons';
import { useTranslation } from 'react-i18next';

interface Screen {
  navigation: any;
}

const Home = ({ navigation }: Screen) => {

  const { t } = useTranslation();
  const openSettings = () => navigation.navigate('Settings')
  const userName = 'Krishna';
  const amount = '34,560.00';
  return (
    <Container style={styles.container}>
      {/* Header */}
      <SpaceBetweenRow>
        <View>
          <Text style={styles.greet}>{t('hello')}</Text>
          <Text style={styles.name}>{userName}</Text>
        </View>
        <TouchableOpacity onPress={openSettings}>
          <Feather name='settings' size={24} />
        </TouchableOpacity>
      </SpaceBetweenRow>

      {/* balance Card */}
      <View style={styles.card}>
        <View style={styles.amountContainer}>
          <Text style={styles.label}>{t('outcome')}</Text>
          <Text style={styles.symbol}>$<Text style={styles.amount}>{amount}</Text></Text>
        </View>
        <View style={styles.chartContainer}>
          <BarChart data={chartData} />
        </View>
      </View>

      <Text style={styles.itemSubtitle}>{t('summeryText')}</Text>

      <View style={{ flex: 1 }}>
        <SectionList
          sections={expensesArray}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item + index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Row style={styles.item}>
                <View style={styles.icon}>
                  <Icon type={item.iconType} name={item.iconName} color={Colors.color1} size={28} />
                </View>
                <SpaceBetweenRow style={{ flex: 1, }}>
                  <View>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text style={styles.itemSubtitle}>{t(item.type)}</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.itemAmount}>- {item.amount}</Text>
                    <Text style={styles.itemSubtitle}>{t('tax')}: {item.tax}</Text>
                  </View>
                </SpaceBetweenRow>
              </Row>
            )
          }}
          renderSectionHeader={({ section: { date } }) => (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>{date}</Text>
            </View>
          )}
        />
      </View>
    </Container>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {},
  greet: {
    fontSize: 36,
    color: Colors.primary,
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    marginTop: 24,
    marginBottom: 10,
  },
  amountContainer: {
  },
  label: {
    fontSize: 16,
    // color: '#232323',
    color: Colors.text2,
  },
  symbol: {
    fontSize: 20,
    color: Colors.text2,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  amount: {
    fontSize: 36,
    color: Colors.text2,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  chartContainer: {
    marginTop: 20,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: Colors.primaryL2,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 12,
    justifyContent: 'center',
  },
  headerContainer: {
    marginVertical: 10,
    backgroundColor: Colors.text2,
  },
  headerText: {
    color: Colors.light,
    fontSize: 16,
  },
  item: {
    marginVertical: 8,
  },
  itemTitle: {
    color: Colors.black,
    fontSize: 18,
  },
  itemSubtitle: {
    color: Colors.light,
    marginTop: 10,
  },
  itemAmount: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: '700',
  },
  itemTax: {},
})