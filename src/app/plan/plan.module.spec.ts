import { PlanModule } from './plan.module';

describe('PlanModule', () => {
  let planModule: PlanModule;

  beforeEach(() => {
    planModule = new PlanModule();
  });

  it('should create an instance', () => {
    expect(planModule).toBeTruthy();
  });
});
