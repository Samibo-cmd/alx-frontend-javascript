export default function taskBlock(trueOrFalse) {
  const TASK = false;
  const TASK2= true;

  if (trueOrFalse) {
    const TASK = true;
    const TASK2 = false;
  }

  return [TASK, TASK2];
}
