import { LayoutAnimation, StyleSheet, Text, TouchableNativeFeedback, TouchableNativeFeedbackComponent, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Container } from '../components/Wrappers'
import { useTranslation } from 'react-i18next'
import Colors from '../constants/Colors'

interface Screen {
}

const languages = [
  { name: 'english', code: 'en' },
  { name: 'hindi', code: 'hi' },
  { name: 'french', code: 'fr' },
  { name: 'mandarin', code: 'zh' },
]
const Settings = ({ }: Screen) => {
  const [showLanguagesList, setOpenLanguagesList] = useState(false)

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }
  return (
    <Container>
      <TouchableNativeFeedback onPress={() => {
        setOpenLanguagesList(!showLanguagesList)
        LayoutAnimation.configureNext(LayoutAnimation.create(200, 'easeInEaseOut', 'opacity'))
      }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{t('changeLanguage')}</Text>
        </View>
      </TouchableNativeFeedback>
      {showLanguagesList && <>
        {languages.map((item, index) => (
          <TouchableOpacity key={index} style={[styles.button, { paddingHorizontal: 24 }]}
            onPress={() => changeLanguage(item.code)}>
            <Text style={styles.buttonText}>{t(item.name)}</Text>
          </TouchableOpacity>
        ))}
      </>
      }
    </Container>
  )
}

export default Settings

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.primary,
  },
})