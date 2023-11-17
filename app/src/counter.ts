export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  const updateCounterDisplay = () => {
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => {
    counter = decrementCounter(counter);
    updateCounterDisplay();
  });

  updateCounterDisplay();
}

export const decrementCounter = (count: number): number => --count;