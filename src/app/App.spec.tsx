import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';
import React from 'react';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText('Rectangle Creator');
});