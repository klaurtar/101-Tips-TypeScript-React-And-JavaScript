jest.mock('@aws-amplify/ui-react', () => ({
  Authenticator: () => (
    <button type="button">Mocked Authenticator Component</button>
  ),
}));
