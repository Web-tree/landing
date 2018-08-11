import { MystuffModule } from './mystuff.module';

describe('MystuffModule', () => {
  let mystuffModule: MystuffModule;

  beforeEach(() => {
    mystuffModule = new MystuffModule();
  });

  it('should create an instance', () => {
    expect(mystuffModule).toBeTruthy();
  });
});
