import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';

const Custom404 = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner">
              <Image
                width={322}
                height={131}
                src="/public/assets/img/bg/404.webp"
                alt="Error Images"
              />
              <h1 className="title">Page not found!</h1>
              <p>Sorry, but the page you were looking for could not be found.</p>
              <div className="back-totop-button cerchio d-inline-block">
                <Link href="/">
                   
                    <span className="hover-flip-item">
                      <span data-text="Back to Homepage">Back to Homepage</span>
                    </span>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
