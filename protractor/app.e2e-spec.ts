import { by, element } from 'protractor'

it('should display trimmed, non-empty names', async () => {
  const nonEmptyNameIndex = 0;
  const nonEmptyName = '"Dr IQ"';
  const parent = element(by.tagName('app-name-parent'));
  const hero = parent.all(by.tagName('app-name-child')).get(nonEmptyNameIndex);

  const displayName = await hero.element(by.tagName('h3')).getText();
  expect(displayName).toEqual(nonEmptyName);
});

it('should replace empty name with default name', async () => {
  const emptyNameIndex = 1;
  const defaultName = '"<no name set>"';
  const parent = element(by.tagName('app-name-parent'));
  const hero = parent.all(by.tagName('app-name-child')).get(emptyNameIndex);

  const displayName = await hero.element(by.tagName('h3')).getText();
  expect(displayName).toEqual(defaultName);
});