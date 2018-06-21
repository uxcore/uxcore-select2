import RcSelect from 'rc-select';
import { isSingleMode } from 'rc-select/lib/util';
import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

class Select2 extends React.Component {
  showDropdownMenu(focus) {
    this.select.setOpenState(true, focus);
  }

  hideDropdownMenu() {
    const me = this;
    me.select.setOpenState(false, false);
    if (!(isSingleMode(this.props) && me.props.showSearch)) {
      me.select.setInputValue('', false);
    }
  }

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
        ref={(c) => {
          this.select = c;
        }}
        {...this.props}
        className={className}
        dropdownClassName={dropdownClassName}
        onSearch={(key) => {
          this.forceUpdate();
          this.props.onSearch(key);
        }}
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
