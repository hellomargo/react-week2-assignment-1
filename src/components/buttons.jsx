import Button from './button';

export default function Buttons({ onIncreaseByNumber }) {
  const NUMBER_BUTTONS = [1, 2, 3, 4, 5];

  return (
    <p>
      {NUMBER_BUTTONS.map((number) => (
        <Button number={number} onIncreaseByNumber={onIncreaseByNumber} />
      ))}
    </p>
  );
}
