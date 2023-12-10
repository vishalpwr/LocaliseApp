import { Icons } from "../components/Icons"
import Colors from "./Colors"

export const chartData = [
  {
    value: 40,
    month: 'Jul'
  },
  {
    value: 70,
    month: 'Aug'
  },
  {
    value: 60,
    month: 'Sep'
  },
  {
    value: 50,
    month: 'Oct'
  },
  {
    value: 80,
    month: 'Nov'
  },
]

export const expensesArray = [
  {
    date: '9 Nov', data: [
      { title: 'Nike Store', type: 'clothing', amount: '$890', tax: '$76.25', iconType: Icons.MaterialCommunityIcons, iconName: 'tshirt-crew' },
    ]
  },
  {
    date: '6 Nov', data: [
      { title: 'Apple Store', type: 'electronic', amount: '$890', tax: '$76.25', iconType: Icons.MaterialCommunityIcons, iconName: 'apple' },
      { title: 'Uber', type: 'transport', amount: '$45', tax: '$5.18', iconType: Icons.MaterialCommunityIcons, iconName: 'taxi' },
    ]
  },
  {
    date: '27 Oct', data: [
      { title: 'Nike Store', type: 'shoes', amount: '$1099', tax: '$81.45', iconType: Icons.MaterialCommunityIcons, iconName: 'shoe-sneaker' },
    ]
  },
]
