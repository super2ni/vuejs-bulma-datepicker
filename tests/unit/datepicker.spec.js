import { shallowMount } from '@vue/test-utils'
import datepicker from '@/components/datepicker.vue'

describe('Datepicker.vue', () => {
    it('renders props.value when passed', () => {
        const value = 'new message'
        const wrapper = shallowMount(datepicker, {
            propsData: { value }
        })
        const input = wrapper.find(".input");
        expect(input.element.value).toMatch(value);
    })
})
