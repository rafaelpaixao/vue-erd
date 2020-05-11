import { shallowMount } from '@vue/test-utils'
import VueErd from '@/vue-erd/index.vue'
import erdDemo from '@/vue-erd/erd-demo'

jest.mock('../../src/vue-erd/erd-demo', () => jest.fn())

describe('VueErd.vue', () => {
  it('call erdDemo when mounted', () => {
    shallowMount(VueErd)
    expect(erdDemo).toBeCalled()
  })
})
