import { textShadowStyle } from './constants'

const text = '#fff'
const link = '#fff'
const bg = '#94D1C8'
const entity = '#577F9D'
const relationship = '#992145'
const isa = '#322519'
const attribute = '#C89176'

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
