import zh_CN from '../../i18n/zh_CN'
import en_US from '../../i18n/en_US'
import zhTranslations from './zh';
const languages = {
  zh_CN,
  en_US
}

const lang = sessionStorage.getItem('lang')

export function customTranslate(template: string, replacements?: Record<string, string>) {
  replacements = replacements || {}

  // const translations = languages[lang || 'zh_CN']

  // Translate
  // template = translations.elements[template] || template
  template = zhTranslations[template] || template
  // console.log(template, 'template=')
  // Replace
  return template.replace(/{([^}]+)}/g, function (_, key) {
    return replacements[key] || '{' + key + '}'
  });
}

export function translateElment(template: string, replacements?: Record<string, string>) {
  replacements = replacements || {}
  const translations = languages[lang || 'zh_CN']

  // Translate
  template = translations.elements[template] || template
  // Replace
  return template.replace(/{([^}]+)}/g, function (_, key) {
    return replacements[key] || '{' + key + '}'
  });
}

export default {
  translate: ['value', customTranslate],
  // translateElment: ['value', translateElment]
}
