"use client"
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '@/components/pages/common/breadcrumb';
import CncServicePage from '@/components/pages/services/cnc/cnc-service';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '@/components/pages/common/scroll/scroll-to-top';
import SEO from '@/components/data/seo';

export default function CNCPage() {
  return (
    <>
      <SEO pageTitle="CNC Machine Hard Disk Solutions" />
      <HeaderOne />
      <BreadCrumb
        title="CNC Machine Hard Disk Solutions"
        innerTitle="CNC Hard Disk Solutions"
      />
      <CncServicePage />
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
