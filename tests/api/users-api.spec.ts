import { expect, test } from '@playwright/test';

const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API', () => {
  test('GET user returns expected data', async ({ request }) => {
    const response = await request.get(`${apiBaseUrl}/users/1`);

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });

  test('POST creates a resource', async ({ request }) => {
    const payload = {
      title: 'Playwright API Test',
      body: 'Portfolio API automation',
      userId: 1
    };

    const response = await request.post(`${apiBaseUrl}/posts`, {
      data: payload
    });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe(payload.title);
    expect(body.userId).toBe(payload.userId);
    expect(body).toHaveProperty('id');
  });
});
