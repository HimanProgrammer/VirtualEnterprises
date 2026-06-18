"use client"
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '@/components/pages/common/breadcrumb';
import ServiceDetail from '@/components/pages/services/detail/service-detail';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '@/components/pages/common/scroll/scroll-to-top';
import SEO from '@/components/data/seo';
import serviceDetails from '@/components/data/service-details-data';

const data = serviceDetails['industry-4-automation-solutions'];

export default function Page() {
  return (
    <>
      <SEO pageTitle={data.title} />
      <HeaderOne />
      <BreadCrumb title={data.title} innerTitle={data.breadcrumb} />
      <ServiceDetail data={data} />
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
