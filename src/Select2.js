let RcSelect = require('rc-select');
let assign = require('object-assign');

class Select2 extends RcSelect {
	constructor(props){
		super(props);
	}
}
Select2.displayName = 'Select2';
Select2.defaultProps = assign({}, RcSelect.defaultProps, {
    prefixCls: "kuma-select2",
	dropdownClassName: 'uxcore',
    optionLabelProp: "children"
});

module.exports = Select2;
