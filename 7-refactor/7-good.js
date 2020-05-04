/**
 * Principles:
 * - Stay DRY (Don’t Repeat Yourself)
 * - Refactor the Code
 */

class Mechanic {
  serviceCar() {
    console.log('Servicing car now');
    this.performOtherTask();
  }

  serviceBike() {
    console.log('Servicing bike now');
    this.performOtherTask();
  }

  performOtherTask() {
    console.log('Prepare');
    console.log('Performing other task');
    console.log('Test');
    console.log('Run');
  }
}