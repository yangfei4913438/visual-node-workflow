import { useCounter } from '@/store';

const Header = () => {
  const { counter, addCounter, subtractCounter, resetCounter } = useCounter();

  return (
    <div>
      <p>当前的Header数值: {counter.count}</p>

      <button onClick={() => addCounter(1)}>新增1</button>

      <br />

      <button onClick={() => subtractCounter(1)}>减少1</button>

      <br />

      <button onClick={resetCounter}>重置Header</button>

      <br />

      <div>Header</div>
    </div>
  );
};

export default Header;
