import { homepageContent } from '@whoiscoming-ui/contents/home-page';
import { Footer } from '@whoiscoming-ui/ui/molecules';
import { Layout } from '@whoiscoming-ui/ui/templates';

// The default locale is en-US, if you want to use other locale, just set locale in entry file globally.
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'antd/locale/zh_CN';



export default function Home() {
  return <Layout footer={<Footer />}>
    
    <ConfigProvider locale={locale}>
  <DatePicker defaultValue={dayjs('2015-01-01', 'YYYY-MM-DD')} />
</ConfigProvider>

</Layout>;
}
