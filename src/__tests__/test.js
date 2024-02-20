import Settings from '../index';

test('test', () => {
  const newSettings = new Settings([['difficulty', 'hard'], ['music', 'rock']]);
  expect(newSettings.settings.get('music')).toEqual('rock');
});
