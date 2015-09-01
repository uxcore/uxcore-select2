let RcSelect = require('rc-select');

class Select2 extends RcSelect {
	constructor(props){
		super(props);
	}
}
Select2.displayName = 'Select2';
Select2.defaultProps.prefixCls = "kuma-select";

module.exports = Select2;


