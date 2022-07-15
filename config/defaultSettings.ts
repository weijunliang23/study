import { Settings as LayoutSettings } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '康特恩后台管理系统',
  pwa: false,
  logo: 'http://192.168.180.12/main/img/logo-ktn.8afa6032.png',
  iconfontUrl: '',
};

export default Settings;
