import { dropShadowFilter, textShadowStyle } from './constants'

export default {
  paper: '#464a65',
  node: {
    text: '#ffffff',
    style: textShadowStyle,
    filter: dropShadowFilter
  },
  link: {
    background: 'none',
    text: '#ffffff',
    line: '#ccc0ef'
  },
  Entity: '#31d0c6',
  WeakEntity: '#31d0c6',
  Relationship: '#797d9a',
  IdentifyingRelationship: '#7c68fd',
  ISA: '#fdb664',
  Key: '#feb662',
  Normal: '#fe8550',
  Multivalued: '#fe8550',
  Derived: '#fca079'
}
