/// <reference types="jest" />

describe('lesson5 modules', () => {
  it('loads functionalProgramming.ts without errors', async () => {
    await expect(import('./functionalProgramming.ts')).resolves.toBeDefined();
  });

  it('loads objectOrientedProgramming.ts without errors', async () => {
    await expect(import('./objectOrientedProgramming.ts')).resolves.toBeDefined();
  });
});
