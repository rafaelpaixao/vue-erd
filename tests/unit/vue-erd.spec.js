import { shallowMount } from '@vue/test-utils'
import VueErd from '@/vue-erd/index.vue'
import { ErdDemo } from '@/vue-erd/erd/demo'

jest.mock('../../src/vue-erd/erd/demo')
ErdDemo.init = jest.fn()

const propsData = {
  id: 'testid',
  width: 678,
  height: 987
}

describe('VueErd.vue', () => {
  it('Rendered the canvas element', () => {
    const instance = shallowMount(VueErd, { propsData })
    expect(instance.find('#' + propsData.id).exists()).toBe(true)
  })

  it('Initialized the diagram', () => {
    const instance = shallowMount(VueErd, { propsData })
    expect(instance.vm.diagram.id).toBe(propsData.id)
    expect(instance.vm.diagram.height).toBe(propsData.height)
    expect(instance.vm.diagram.width).toBe(propsData.width)
  })

  it('Show JointJs ERD Demo', () => {
    shallowMount(VueErd, { propsData })
    expect(ErdDemo.init).toBeCalled()
  })
})
