import React from 'react';
import RcSelect from 'rc-select';
import assign from 'object-assign';

export default class Select extends RcSelect {
	constructor(props){
		super(props);
	}
}
Select.displayName = 'uxcore-select';
Select.propTypes = RcSelect.propTypes;
Select.defaultProps = assign(RcSelect.defaultProps, {
	prefixCls: 'kuma-select'
});
