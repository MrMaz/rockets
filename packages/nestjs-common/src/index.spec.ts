import {
  ReferenceIdDto,
  AuditDto,
  CommonEntityDto,
  AuthUser,
  createSettingsProvider,
} from './index';

describe('Module Exports', () => {
  it('ReferenceIdDto should be a class', () => {
    expect(ReferenceIdDto).toBeInstanceOf(Function);
  });

  it('AuditDto should be a class', () => {
    expect(AuditDto).toBeInstanceOf(Function);
  });

  it('CommonEntityDto should be a class', () => {
    expect(CommonEntityDto).toBeInstanceOf(Function);
  });

  // Decorators are functions
  it('AuthUser decorator should be a function', () => {
    expect(AuthUser).toBeInstanceOf(Function);
  });

  // Utility functions
  it('createSettingsProvider should be a function', () => {
    expect(createSettingsProvider).toBeInstanceOf(Function);
  });
});
