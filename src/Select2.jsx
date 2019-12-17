import RcSelect from 'rc-select';
import classnames from 'classnames';
import React from 'react';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';

class Select2 extends React.Component {
  updateTitle() {
    const { labelInValue, value, prefixCls} = this.props
    if (labelInValue && value && value.label && value.title) {
      const $select = ReactDom.findDOMNode(this.rcSelect)
      const $value = $select.querySelector(`.${prefixCls}-selection-selected-value`)
      if ($value) {
        $value.title = value.title
      }
    }
  }
  componentDidMount() {
    this.updateTitle()
  }
  componentDidUpdate() {
    this.updateTitle()
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
        {...this.props}
        ref={(c) => {
          this.rcSelect = c;
          this.props.rcRef(c)
        }}
        className={className}
        dropdownClassName={dropdownClassName}
        onSearch={(key) => { this.forceUpdate(); this.props.onSearch(key); }}
      />
    );
  }
}
Select2.displayName = 'Select2';
Select2.RcSelect = RcSelect;
Select2.propTypes = {
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  rcRef: PropTypes.func,
  onSearch: PropTypes.func,
};
Select2.defaultProps = {
  size: 'large',
  prefixCls: 'kuma-select2',
  optionLabelProp: 'children',
  transitionName: 'selectSlideUp',
  rcRef: () => {},
  onSearch: () => {},
};

Select2.Option = RcSelect.Option;
Select2.OptGroup = RcSelect.OptGroup;

export default Select2;
