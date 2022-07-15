import {useModel} from "umi";
import {useState} from 'react';
import {Modal as AntdModal,Avatar } from 'antd';
import WangEditor from "@/pages/TableList/components/WangEditor";
type propsType = {
  record1: API.RuleListItem | null
}
const Modal = (props: propsType)=>{
  const {visible,setVisibleFn} = useModel('ggsmd');
  const [val, setVal] = useState<string>('hello world');
  const handleOK = ()=>{
    console.log(val);
    setVisibleFn()
  }
  const getHtmlValue = (v: string) => {
    setVal(v);
  }
  return <>
    <AntdModal visible={visible} onCancel={setVisibleFn} maskClosable={false} onOk={handleOK}>
      <Avatar src={props.record1?.avatar}></Avatar>
      <div  style={{ marginTop: '20px' }}>
        <WangEditor getHtmlValue={getHtmlValue}></WangEditor>
      </div>
    </AntdModal>
        </>
}

export default Modal;

