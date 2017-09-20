import RcSelect from 'rc-select';
import classnames from 'classnames';
import React from 'react';


class Select2 extends React.Component {
  render() {
    const me = this;
    const className = classnames(me.props.className, {
      [`${me.props.prefixCls}-${me.props.size}`]: !!me.props.size,
    });
    const dropdownClassName = classnames(me.props.dropdownClassName, {
      [`${me.props.prefixCls}-dropdown-${me.props.size}`]: !!me.props.size,
    });
    return (
      <RcSelect {...this.props} className={className} dropdownClassName={dropdownClassName} />
    );
  }
}
Select2.displayName = 'Select2';
Select2.propTypes = {
  size: React.PropTypes.oneOf(['large', 'middle', 'small']),
};
Select2.defaultProps = {
  size: 'large',
  prefixCls: 'kuma-select2',
  optionLabelProp: 'children',
  transitionName: 'selectSlideUp',
  notFoundContent: '',
};

Select2.Option = RcSelect.Option;
Select2.OptGroup = RcSelect.OptGroup;

export default Select2;
