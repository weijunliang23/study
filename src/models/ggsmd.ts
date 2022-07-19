import { useCallback, useState } from 'react';

export default  () => {
  const [visible, setVisible] = useState(false);
  const setVisibleFn = useCallback(() => setVisible((c) => !c), []);
  return { visible, setVisibleFn };
};
