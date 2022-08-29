import { shallowMount  } from '@vue/test-utils'
import Search from '@/components/Search.vue'
import { useRouter } from 'vue-router'

jest.mock('vue-router', () => ({
    useRoute: jest.fn(),
    useRouter: jest.fn(() => ({
      push: () => {}
    }))
  }))
  
  const push = jest.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))


describe('Search.vue', () => {
  it('check if card is using medium size image only on the landing page', async () => {
    const search = shallowMount(Search, {
        global: {
            stubs: ["router-link", "router-view"],
        }});
        await search.find('button').trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
  });

})
