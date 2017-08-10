import { mount } from 'enzyme';

import React from 'react';
import FaqRepeater from 'components/FaqRepeater';
import { Link } from 'react-router';

const faq = [
  {
    fields: {
      id: 1234,
      question: 'question?',
      answer: 'answer',
      slug: 'question-answer',
    },
  }, {
    fields: {
      id: 6789,
      question: 'question 2?',
      answer: 'answer 2',
      slug: 'question2-answer2',
    },
  },
];

describe('FaqRepeater component', () => {
  it('should return null if there are no faqs passed in', () => {
    const wrapper = mount(<FaqRepeater />);

    expect(wrapper.html()).to.equal(null);
  });

  it('should contain li for each faq', () => {
    const wrapper = mount(<FaqRepeater faq={faq} />);

    const items = wrapper.find('li');

    expect(items).to.have.length(faq.length);
  });

  it('should display question & answer when no linkTo base is provided', () => {
    const wrapper = mount(<FaqRepeater faq={faq} />);
    const [item] = faq;

    const container = wrapper.find('li').first();
    const slug = container.getDOMNode().getAttribute('id');
    const question = container.find('h3').text().trim();
    const answer = container.find('p').text().trim();

    expect(question).to.equal(item.fields.question);
    expect(answer).to.equal(item.fields.answer);
    expect(slug).to.equal(item.fields.slug);
  });

  it('should not render an answer when a linkTo path is provided', () => {
    expect(mount(<FaqRepeater faq={faq} linkTo={'/test/path'} />).find('li').filter('p')).to.have.length(0);
  });

  it('should render a link when a linkTo path is provided', () => {
    const wrapper = mount(<FaqRepeater faq={faq} linkTo={'/test/path'} />).find(Link);
    expect(wrapper.getNodes()).to.not.have.length(0);

    const link = wrapper.first().getDOMNode();
    expect(link).to.have.property('href');
  });
});
