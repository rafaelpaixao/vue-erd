import { textShadowStyle } from './constants'

export default {
  paper: 'white',
  node: {
    text: '#ffffff',
    style: textShadowStyle,
    filter: null
  },
  link: {
    background: 'none',
    text: '#000',
    line: '#222222'
  },
  Entity: '#00a6ed',
  WeakEntity: '#00a6ed',
  Relationship: '#7fb800',
  IdentifyingRelationship: '#7fb800',
  ISA: '#ffb400',
  Key: '#f6511d',
  Normal: '#f6511d',
  Multivalued: '#f6511d',
  Derived: '#f6511d'
}
