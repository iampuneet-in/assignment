import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import GenreSlider from '@/components/GenreSlider.vue'
import { shows } from '../fixtures/show'

describe('GenreSlider.vue', () => {
  it('renders props.msg when passed', () => {
    const genreSlider = shallowMount(GenreSlider, {
        propsData: {
            shows: [shows],
            genre: shows.genres[0]
        },
        stubs: {
          RouterLink: RouterLinkStub
      }
    });
    expect(genreSlider.find('h2').text()).toMatch(shows.genres[0])
  })
})
