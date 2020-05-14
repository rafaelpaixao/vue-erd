import { shallowMount } from '@vue/test-utils'
import VueErd from '@/vue-erd/index.vue'
import { ErdDemo } from '@/vue-erd/erd/demo'

jest.mock('../../src/vue-erd/erd/demo')
ErdDemo.init = jest.fn()

describe('VueErd.vue', () => {
  it('Initialize the Joint.js ERD demo', () => {
    shallowMount(VueErd)
    expect(ErdDemo.init).toBeCalled()
  })
})
