import { Button } from 'antd';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useModel } from 'umi';
import styles from './index.less';
const TestChildren: React.FC<{ changShow: () => void; value: number; set: () => void }> = memo(
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
  const { add, minus, counter, set } = useModel('test' as any, (ret: any) => ({
    add: ret.increment,
    minus: ret.decrement,
    counter: ret.counter,
    set: ret.set,
  }));
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    if (counter <= 0) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  }, [counter]);
  const changShow = useCallback(() => setIsChange((e) => !e), [counter]);
  const arr = useMemo(() => Array(2).fill(Math.floor(Math.random() * 5)), [isChange]);

  return (
    <>
      <div>
        <Button onClick={add}>add by 1</Button>
        <Button onClick={minus} disabled={isChange}>
          minus by 1
        </Button>
        <div className={styles.btnText}> {counter}</div>
        {arr.map((item, index) => (
          <div key={index} className={styles.btnText}>
            {item}
          </div>
        ))}
        <TestChildren changShow={changShow} value={counter} set={set} />
      </div>
    </>
  );
};
export default Test;
