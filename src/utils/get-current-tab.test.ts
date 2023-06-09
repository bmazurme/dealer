import getCurrentTab from './get-current-tab';

const tabs = [
  { name: 'type-1', active: true },
  { name: 'type-2', active: false },
  { name: 'type-3', active: false },
];

test('get tab', () => {
  expect(getCurrentTab(tabs, [30, 30, 30], 0)).toEqual('type-1');
});

test('get tab', () => {
  expect(getCurrentTab(tabs, [30, 30, 30], 34)).toEqual('type-2');
});

test('get tab', () => {
  expect(getCurrentTab(tabs, [30, 30, 30], 64)).toEqual('type-3');
});

test('get tab', () => {
  expect(getCurrentTab(tabs, [40, 10, 40], 0)).toEqual('type-1');
});

test('get tab', () => {
  expect(getCurrentTab(tabs, [40, 10, 40], 34)).toEqual('type-1');
});

test('get tab', () => {
  expect(getCurrentTab(tabs, [40, 10, 40], 44)).toEqual('type-2');
});

test('get tab', () => {
  expect(getCurrentTab(tabs, [40, 10, 40], 64)).toEqual('type-3');
});
