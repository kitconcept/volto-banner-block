import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import config from '@plone/volto/registry';
import cx from 'classnames';
import { BlockWrapper } from '@kitconcept/volto-bm3-compat';

const LegacyWrapper = (props) => (
  <div className={cx('banner container')} style={props.style}>
    {props.children}
  </div>
);

const View = (props) => {
  const { data } = props;
  const Image = config.getComponent({ name: 'Image' }).component;

  return (
    <BlockWrapper {...props} ExtraWrapper={LegacyWrapper}>
      {data.url && (
        <>
          <Image
            src={`${flattenToAppURL(data.url)}/@@images/image`}
            alt={data.alt}
            className="image"
            loading="lazy"
          />
          <div className="banner-inner-container">
            <div className="text">
              {data.text && <p>{data?.text}</p>}
              {data.additionalText && <p>{data?.additionalText}</p>}
            </div>
          </div>
        </>
      )}
    </BlockWrapper>
  );
};

export default View;
