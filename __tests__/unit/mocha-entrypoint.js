import { teardownMockAdapter } from '__tests__/lib/mock-adapter';
import setupDom from '__tests__/lib/setup-dom';

beforeEach('reset DOM to prevent leaky tests', () => {
  setupDom();
});

after('turn of API mocks', () => {
  teardownMockAdapter();
});
