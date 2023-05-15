import { expect, it } from 'vitest'
import BasicComponent from './index';
import { render } from '@testing-library/react';
import { createSerializer } from '@emotion/jest'

expect.addSnapshotSerializer(createSerializer());


it('toUpperCase', () => {
  const result = render(<BasicComponent />)
  expect(result).toMatchSnapshot();
});