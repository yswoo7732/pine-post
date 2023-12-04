import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/post.module.css';
import { isPine } from '@/lib/utils';
import { nativeConnector } from '@/lib/native';
import styled from '@emotion/styled';

const Container = styled.figure`
padding: 1rem 0;
width: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
`;

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value, key) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        className={[
          bold ? 'font-bold' : 'font-medium',
          code ? styles.code : '',
          italic ? 'italic' : '',
          strikethrough ? 'strikethrough' : '',
          underline ? 'underline' : '',
          styles[`${color}`],
        ].join(' ')}
        key={key}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export const renderNestedList = block => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === 'numbered_list_item';

  if (isNumberedList) {
    return <ol>{value.children?.map((block: any) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children?.map((block: any) => renderBlock(block))}</ul>;
};

export const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return value.rich_text.length > 0 ? (
        <p className="mb-2 text-base font-medium">
          <Text text={value.rich_text} />
        </p>
      ) : (
        <br></br>
      );
    case 'heading_1':
      return (
        <h1 className="mt-12 mb-5">
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="mt-1 mb-2">
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="mt-1 mb-2">
          <Text text={value.rich_text} />
        </h3>
      );
    case 'bulleted_list': {
      return <ul>{value.children?.map(child => renderBlock(child))}</ul>;
    }
    case 'numbered_list': {
      return <ol>{value.children?.map(child => renderBlock(child))}</ol>;
    }
    case 'bulleted_list_item':
    case 'numbered_list_item':
      return (
        <li key={block.id}>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block)}
        </li>
      );
    case 'to_do':
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{' '}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case 'toggle':
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map(child => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );
    case 'child_page':
      return (
        <div className={styles.childPage}>
          <strong>{value.title}</strong>
          {block.children?.map(child => renderBlock(child))}
        </div>
      );
    case 'image':
      const src =
        value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <Container>
          <Image
            src={src}
            alt={caption}
            className="autoImage"
            layout="fill"
            unoptimized={true}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFUCAQAAAAJsv8dAAABs0lEQVR42u3QMREAAAgEIL9/RrNoCDcPIpCe4iACBQoUKBCBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUKBAgQIFChSIQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFChQoECBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUCACBQoUKFCgQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFPjFAtP2eaPnAr3uAAAAAElFTkSuQmCC"
          />
          {caption && (
            <figcaption className="text-sm font-normal text-neutral-70">
              {caption}
            </figcaption>
          )}
        </Container>
      );
    case 'divider':
      return <hr key={id} className="mt-2 mb-7 h-[2px] bg-neutral-30" />;
    case 'quote':
      return (
        <blockquote
          className="border-l-4 border-l-black pl-2 font-medium"
          key={id}
        >
          <Text text={value.rich_text?.map((child: any) => child)}></Text>
        </blockquote>
      );
    case 'callout': {
      return (
        <div className={styles.pre}>
          <Text text={value.rich_text?.map((child: any) => child)}></Text>
        </div>
      );
    }
    case 'file':
      const src_file =
        value.type === 'external' ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split('/');
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure>
          <div className={styles.file}>
            📎{' '}
            <Link href={src_file} passHref legacyBehavior>
              <a
                onClick={() => {
                  if (isPine()) {
                    // PV 트래킹
                    nativeConnector.sendAppsFlyerLog('af_content_view', {
                      af_action_type: 'link',
                      af_content_id: src_file,
                    });
                  }
                }}
              >
                {lastElementInArray.split('?')[0]}
              </a>
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case 'bookmark':
      const href = value.url;
      return (
        <a href={href} target="_brank" className={styles.bookmark}>
          {href}
        </a>
      );
    case 'table': {
      return (
        <table className={styles.table}>
          <tbody>
            {block.children?.map((child, i) => {
              const RowElement =
                value.has_column_header && i == 0 ? 'th' : 'td';
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <Text text={cell} />
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case 'column_list': {
      return (
        <div className={styles.row}>
          {block.children?.map((block: any) => renderBlock(block))}
        </div>
      );
    }
    case 'column': {
      return (
        <div>{block.children?.map((child: any) => renderBlock(child))}</div>
      );
    }
    case 'video':
      const vsrc =
        value.type === 'external' ? value.external.url : value.file.url;
      const vcaption = value.caption ? value.caption[0]?.plain_text : '';

      return (
        <div className="mb-5 text-base font-medium min-w-full min-h-0 pb-[56.25%] relative">
          <iframe
            src={vsrc}
            title={vcaption}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
            }}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      );
    case 'code':
      return (
        <div className="my-5">
          <span className="font-medium text-xs text-neutral-70">
            {value.rich_text?.map(text => {
              console.log(text);
              return text.plain_text;
            })}
          </span>
        </div>
      );
    default:
      return;
  }
};

export const classes = (classes: (string | undefined)[]): string =>
  classes.join(' ').trim();
