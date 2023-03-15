
import { describe, it, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import router from '@/router'
import HeaderView from '../HeaderView.vue'

function mountHeaderView() {
  const wrapper = mount(HeaderView, {
    global: {
      plugins: [router]
    }
  })
  return wrapper
}

describe('The Router', () => {
  it('mounts properly', () => {
    expect(mountHeaderView().text()).toContain('About')
  })

  test('click the links', async () => {
    const push = vi.spyOn(router, 'push')

    await mountHeaderView().find('a[id=link]').trigger('click')

    expect(push).toHaveBeenCalledOnce()
    expect(push).toHaveBeenCalledWith('/')

    await mountHeaderView().find('a[type=button]').trigger('click')
    
    expect(push).toHaveBeenCalledTimes(2)
    expect(push).toHaveBeenCalledWith('/about')
  })
})
