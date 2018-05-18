import RcSelect from 'rc-select';
import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';


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
      <RcSelect
        {...this.props} className={className}
        dropdownClassName={dropdownClassName} onSearch={(key) => { this.forceUpdate(); this.props.onSearch(key); }}
      />
    );
  }
}
Select2.displayName = 'Select2';
Select2.RcSelect = RcSelect;
Select2.propTypes = {
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  onSearch: PropTypes.func,
};
Select2.defaultProps = {
  size: 'large',
  prefixCls: 'kuma-select2',
  optionLabelProp: 'children',
  transitionName: 'selectSlideUp',
  onSearch: () => {},
};

Select2.Option = RcSelect.Option;
Select2.OptGroup = RcSelect.OptGroup;

export default Select2;
