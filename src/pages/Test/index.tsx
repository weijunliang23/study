import { Button } from 'antd';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useModel } from 'umi';
import styles from './index.less';
const TestChildren: React.FC<{ changShow: () => void; value: number}> = memo(
  ({ changShow, value }) => {
    return (
      <>
        <Button onClick={changShow}>测试</Button>
        <p>{value}</p>
      </>
    );
  },
);
const Test: React.FC = () => {
  const { increment, decrement ,counter} = useModel('test')

  //   , (model: any) => ({
  //   add: model.increment,
  //   minus: model.decrement,
  //   counter : model.counter
  // }));
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    if (counter <= 0) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  }, [counter]);
  const changShow = useCallback(() => setIsChange((e) => !e), [counter]);
  const arr = useMemo(() => Array(5).fill(Math.floor(Math.random() * 5)), [isChange]);

  return (
    <>
      <div>
        <Button onClick={increment}>add by 1</Button>
        <Button onClick={decrement} disabled={isChange}>
          minus by 1
        </Button>
        <div className={styles.text}> {counter}</div>
        {arr.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
        <TestChildren changShow={changShow} value={counter}  />
      </div>
    </>
  );
};
export default Test;

