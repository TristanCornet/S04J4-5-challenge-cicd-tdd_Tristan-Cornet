export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  element.addEventListener('click', () => {
    element.innerHTML = `count is ${decrementCounter(counter)}`;
  });

  element.innerHTML = `count is ${counter}`;
}

export const decrementCounter = (count: number): number => --count;
