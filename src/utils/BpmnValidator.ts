const SPACE_REGEX = /\s/

// for QName validation as per http://www.w3.org/TR/REC-xml/#NT-NameChar
// | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
const QNAME_REGEX = /^([a-z][\w-.]*:)?[a-z_][\w-.]*$/i

// for ID validation as per BPMN Schema (QName - Namespace)
const ID_REGEX = /^[a-z_][\w-.]*$/i

export function containsSpace(value) {
  return SPACE_REGEX.test(value)
}

/**
 * checks whether the id value is valid
 *
 * @param {ModdleElement} element
 * @param {String} idValue
 * @param {Function} translate
 *
 * @return {String} error message
 */
export function isIdValid(element, idValue) {
  const assigned = element.$model.ids.assigned(idValue)
  const idAlreadyExists = assigned && assigned !== element

  if (!idValue) {
    return '流程编码 不能为空.'
  }

  if (idAlreadyExists) {
    return '流程编码 必须是唯一的'
  }

  return validateId(idValue)
}
export function validateId(idValue) {
  if (containsSpace(idValue)) {
    return '流程编码 不能包含空格'
  }

  if (!ID_REGEX.test(idValue)) {
    if (QNAME_REGEX.test(idValue)) {
      return '流程编码 不能包含前缀'
    }

    return '流程编码 必须符合 BPMN 规范'
  }
}
