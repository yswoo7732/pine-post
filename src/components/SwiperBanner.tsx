import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from 'swiper';
import SwiperNextButton from '@/component/SwiperNextButton';
import SwiperPrevButton from '@/component/SwiperPrevButton';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';

const SwiperBanner = ({ data, title }) => {
  SwiperCore.use([Navigation, Pagination]);

  const swiperRef = useRef<SwiperCore>();

  // console.log('SwiperBanner', data);
  return (
    <article key={data} className="bg-[#fff] pb-5 mb-3 min-h-[300px]">
      {data && data.length > 0 && (
        <section className="p-container mx-container mb-4">
          <span className=" bg-pink-20 text-pink-100 px-3 rounded-xl">
            {title}
          </span>
          <Swiper
            className="relative h-25 mt-3"
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            spaceBetween={0}
            pagination={{
              type: 'fraction',
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {data?.map((content: any) => (
              <SwiperSlide key={content.id}>
                <h5 className="line-clamp-2">
                  {content.properties?.Name.title?.[0].plain_text}
                </h5>
                <Link
                  href={{
                    pathname: `/${content.properties.slug.rich_text[0].plain_text}`,
                    query: { id: content.id },
                  }}
                >
                  <div className="h-52 slide-img">
                    <Image
                      src={content.properties?.thumbnail.files?.[0].file?.url}
                      height={160}
                      width={304}
                      className="rounded-[10px]"
                      layout="responsive"
                      unoptimized={true}
                      priority
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFUCAQAAAAJsv8dAAABs0lEQVR42u3QMREAAAgEIL9/RrNoCDcPIpCe4iACBQoUKBCBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUKBAgQIFChSIQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFChQoECBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUCACBQoUKFCgQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFPjFAtP2eaPnAr3uAAAAAElFTkSuQmCC"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperPrevButton />
          <SwiperNextButton />
        </section>
      )}
    </article>
  );
};
export default SwiperBanner;
