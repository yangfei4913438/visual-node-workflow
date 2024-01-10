import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '@/store/slices';
import type { AppDispatch, RootState } from '@/store/makeStore';

const useCounter = () => {
  // 多处引用，并不会引起这里的数据错乱，引用的值保持一致。一处修改，处处同步。
  const counter = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch<AppDispatch>();

  const addCounter = (num: number) => {
    dispatch(counterActions.add({ count: num }));
  };

  const subtractCounter = (num: number) => {
    dispatch(counterActions.subtract({ count: num }));
  };

  const resetCounter = () => {
    dispatch(counterActions.reset());
  };

  return {
    counter,
    addCounter,
    subtractCounter,
    resetCounter,
  };
};

export default useCounter;
