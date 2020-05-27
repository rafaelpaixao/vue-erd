/*
https://gist.github.com/r-malon/8fc669332215c8028697a0bbfbfbb32a
*/

import { textShadowStyle } from './constants'

const entity = '#e87d3e'
const relationship = '#6c99bb'
const isa = '#9e86c8'
const attribute = '#b05279'

export default {
  paper: '#2e2e2e',
  node: {
    text: '#d6d6d6',
    style: textShadowStyle,
    filter: null
  },
  link: {
    background: 'none',
    text: '#797979',
    line: '#797979'
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
