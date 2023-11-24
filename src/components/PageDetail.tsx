import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/post.module.css';
import { isPine } from '@/lib/utils';
import { nativeConnector } from '@/lib/native';

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
          bold ? 'font-bold' : '',
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

  if (type === 'code') {
    console.log(value);
  }
  switch (type) {
    case 'paragraph':
      return (
        <p className="mb-5 text-base font-medium">
          <Text text={value.rich_text} />
        </p>
      );
    case 'heading_1':
      return (
        <h1 className="mt-12 mb-5">
          <Text text={value.rich_text} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="mb-5">
          <Text text={value.rich_text} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="mb-5">
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
        <figure>
          <Image
            src={src}
            alt={caption}
            width={960}
            height={600}
            layout="responsive"
            unoptimized={true}
            priority
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFUCAQAAAAJsv8dAAABs0lEQVR42u3QMREAAAgEIL9/RrNoCDcPIpCe4iACBQoUKBCBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUKBAgQIFChSIQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFChQoECBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUCACBQoUKFCgQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFPjFAtP2eaPnAr3uAAAAAElFTkSuQmCC"
          />
          {caption && (
            <figcaption className="text-sm font-normal text-neutral-60">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    case 'divider':
      return <hr key={id} className="my-12" />;
    case 'quote':
      return (
        <blockquote className="border-l-4 border-l-black pl-2" key={id}>
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
    default:
      return;
  }
};
