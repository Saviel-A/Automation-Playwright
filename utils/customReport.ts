import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import { Logger } from './logger';

class CustomReport implements Reporter {
  outputDir: string;

  async onBegin(config: FullConfig, suite: Suite) {
    // Log the start of the test run and the number of tests
    await Logger.Info(`Starting the run with ${suite.allTests().length} tests`);
  }

  async onTestBegin(test: TestCase, result: TestResult) {
    // Log the start of a test
    await Logger.Info(`Starting test: ${test.title}`);
  }

  async onTestEnd(test: TestCase, result: TestResult) {
    if (result.status === 'failed') {
      await Logger.Error(`Test Failed: ${result.error?.message}`);
    }
    // Log the completion of a test
    await Logger.Info(`Finished test: ${test.title}`);
  }

  async onEnd(result: FullResult) {
    // Log the completion of the test run and the status (Passed or Failed)
    if (result.status === 'passed') {
      await Logger.Success(`Finished the run: Passed`);
    } else {
      await Logger.Error(`Finished the run: Failed`);
    }
  }
}

export default CustomReport;
