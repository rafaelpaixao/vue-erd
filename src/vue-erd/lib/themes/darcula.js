/*
https://draculatheme.com/contribute/
*/

import { textShadowStyle } from './constants'

const bg = '#282a36'
const text = '#f8f8f2'
const link = '#6272a4'
const entity = '#8be9fd'
const relationship = '#ff5555'
const isa = '#ff79c6'
const attribute = '#50fa7b'

export default {
  paper: bg,
  node: {
    text: text,
    style: textShadowStyle,
    filter: null
  },
  link: {
    background: 'none',
    text: link,
    line: link
  },
  Entity: entity,
  WeakEntity: entity,
  Relationship: relationship,
  IdentifyingRelationship: relationship,
  ISA: isa,
  Key: attribute,
  Normal: attribute,
  Multivalued: attribute,
  Derived: attribute
}
