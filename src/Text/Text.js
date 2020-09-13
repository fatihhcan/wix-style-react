import React from 'react';
import RawText from './RawText';
import { st, classes } from './Text.st.css';
import Ellipsis, { extractEllipsisProps } from '../common/Ellipsis';
import { EllipsisCommonProps } from '../common/PropTypes/EllipsisCommon';

const TextWithEllipsis = ({ className, ...props }) => {
  const { ellipsisProps, componentProps } = extractEllipsisProps(props);
  return (
    <Ellipsis
      {...ellipsisProps}
      wrapperClassName={st(classes.root, {
        size: props.size,
        weight: props.weight,
      })}
      render={({ ref, ellipsisClasses, ellipsisInlineStyle }) => (
        <RawText
          {...componentProps}
          ref={ref}
          className={ellipsisClasses(className)}
          style={ellipsisInlineStyle}
        />
      )}
    />
  );
};

TextWithEllipsis.displayName = 'Text';

TextWithEllipsis.propTypes = {
  ...RawText.propTypes,
  ...EllipsisCommonProps,
};

TextWithEllipsis.defaultProps = {
  ...RawText.defaultProps,
  ...Ellipsis.defaultProps,
};

export default TextWithEllipsis;
