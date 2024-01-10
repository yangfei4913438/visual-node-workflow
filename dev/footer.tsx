import { useCounter } from '@/store';

const Footer = () => {
  const { counter, addCounter, subtractCounter, resetCounter } = useCounter();

  return (
    <div>
      <p>当前的Footer数值: {counter.count}</p>

      <button onClick={() => addCounter(1)}>新增1</button>

      <br />

      <button onClick={() => subtractCounter(1)}>减少1</button>

      <br />

      <button onClick={resetCounter}>重置Footer</button>

      <br />

      <div>Footer</div>
    </div>
  );
};

export default Footer;
