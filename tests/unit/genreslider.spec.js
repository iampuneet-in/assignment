import { shallowMount } from '@vue/test-utils'
import GenreSlider from '@/components/GenreSlider.vue'
import { shows } from '../fixtures/show'
// refactoring
// function factory (propsData) {
//     return shallowMount(GenreSlider, {
//         propsData
//     })
// }

describe('GenreSlider.vue', () => {
  it('renders props.msg when passed', () => {
    const genreSlider = shallowMount(GenreSlider, {
        propsData: {
            shows: [shows],
            genre: "Action"
        }
    });
    expect(genreSlider.find('h2').text()).toMatch('Action')
  })
})
