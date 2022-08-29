import { shallowMount, RouterLinkStub   } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import { shows } from '../fixtures/show'

describe('Card.vue', () => {
  it('check if card is using medium size image only on the landing page', () => {
    const card = shallowMount(Card, {
        propsData: {
          show: shows,
        },
        stubs: {
          RouterLink: RouterLinkStub
      }
    });
    const cardImage = card.get('[data-test="show-image"]');
    expect(cardImage.attributes().src).toBe(shows.image.medium);
  });

  it('check if card is mounting the correct show name', () => {
    const card = shallowMount(Card, {
        propsData: {
          show: shows,
        }
    });
    const showNameDiv = card.get('[data-test="show-name"]');
    expect(showNameDiv.text()).toMatch(shows.name);
  });

})
