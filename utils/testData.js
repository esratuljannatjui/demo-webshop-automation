function generateUser() {
  const stamp = Date.now();
  return {
    firstName: 'Test',
    lastName: 'User',
    email: `testuser${stamp}@example.com`,
    password: 'Test@12345',
  };
}

const billingAddress = {
  country: 'United States',
  state: 'California',
  city: 'Los Angeles',
  address: '123 Test Street',
  zip: '90001',
  phone: '0123456789',
};

module.exports = { generateUser, billingAddress };