import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
    it('Should match snapshot', () => {
        const component = shallow(<Button />);
        expect(component.html()).toMatchSnapshot();
    });
    it('Should have Button ', () => {
        const component = mount(<Button />);
        expect(component.find('button')).toHaveLength(1);
    });
    it('Should call function from props on click on the button', () => {
        const onClickBtn = jest.fn();
        const title = 'testTitle';
        const component = mount(<Button onClick={onClickBtn} title={title} />);
        component.simulate('click');
        expect(onClickBtn).toHaveBeenCalled();
        expect(component.html()).toBe(`<Button>${title}</Button>`);
    });
});