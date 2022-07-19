import { AutoChart } from '@antv/auto-chart';
import React from "react";

const defaultData = [
  { price: 100, type: 'A' },
  { price: 120, type: 'B' },
  { price: 150, type: 'C' },
];

const Demo: React.FC = ()=>(
  <>
    111
    <AutoChart
      title="CASE 1"
      description="auto chart analysis"
      data={defaultData}
      language={'zh-CN'}
    />
  </>
)

export default Demo;
