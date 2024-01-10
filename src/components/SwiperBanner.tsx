import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from 'swiper';
import SwiperNextButton from '@/component/SwiperNextButton';
import SwiperPrevButton from '@/component/SwiperPrevButton';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import Image from 'next/image';
import { isPine } from '@/lib/utils';
import { APP_LINK_WEB } from '@/constants';

const SwiperBanner = ({ data, title }) => {
  console.log(data);
  SwiperCore.use([Navigation, Pagination]);

  const swiperRef = useRef<SwiperCore>();

  // console.log('SwiperBanner', data);
  return (
    <article key={data} className="bg-[#fff] pb-5 pt-3 mb-3 min-h-[300px]">
      {data && data.pages[0]?.results?.length > 0 && (
        <section className="p-container mx-container mb-4">
          <span className=" bg-pink-20 text-pink-100 px-3 rounded-xl text-sm">
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
            {data.pages[0]?.results?.map((content: any) => (
              <SwiperSlide key={content.id}>
                <h5 className="line-clamp-2">
                  {content.properties?.Name.title?.[0].plain_text}
                </h5>
                <Link
                  href={{
                    pathname: `/${content.properties.slug.rich_text[0].plain_text}`,
                    query: { id: content.id },
                  }}
                  legacyBehavior
                >
                  <a
                    onClick={e => {
                      e.preventDefault();
                      if (isPine()) {
                        window.open(
                          `${APP_LINK_WEB}/${content.properties.slug?.rich_text[0]?.plain_text}?id=${content.id}`
                        );
                      } else {
                        window.location.href = `/${content.properties.slug?.rich_text[0]?.plain_text}?id=${content.id}`;
                      }
                    }}
                  >
                    <div className="h-52 slide-img">
                      <Image
                        src={
                          content.properties?.thumbnail.files?.[0]?.file?.url ??
                          content.properties?.thumbnail.files?.[0]?.name ??
                          '/banner_df_img.webp'
                        }
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
                  </a>
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
