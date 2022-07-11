import React from 'react';
import { ProForm, ProFormText, ProFormSelect } from '@ant-design/pro-components';

const Study: React.FC = () => {
  const request = async () => {
    return [
      { label: '全部', value: 'all' },
      { label: '未解决', value: 'open' },
      { label: '已解决', value: 'closed' },
      { label: '解决中', value: 'processing' },
    ];
  };
  return (
    <>
      <ProForm
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProFormText name="name" label="姓名" />
        <ProFormText label="相互依赖的" initialValue="所有的" name="text" />
        <ProFormSelect
          name="select2"
          label="Select"
          valueType="select"
          dependencies={['text']}
          request={request}
          placeholder="Please select a country"
        />
      </ProForm>
    </>
  );
};

export default Study;
