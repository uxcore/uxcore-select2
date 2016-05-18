import RcSelect from 'rc-select';
import assign from 'object-assign';

class Select2 extends RcSelect {
    constructor(props) {
        super(props);
    }
}
Select2.displayName = 'Select2';
Select2.defaultProps = assign({}, RcSelect.defaultProps, {
    prefixCls: 'kuma-select2',
    optionLabelProp: 'children',
    transitionName: 'slideUp'
});

export default Select2;