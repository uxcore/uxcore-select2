let RcSelect = require('rc-select');
let assign = require('object-assign');

class Select2 extends RcSelect {
    constructor(props) {
        super(props);
    }
    componentDidUpdate() {
        var me = this;
        var haveOpened = me.haveOpened;
        me.haveOpened = false;
        if (haveOpened) {
            React.render(me.getDropdownElement(), (function() {
                if (!me.dropdownContainer) {
                    me.dropdownContainer = document.createElement('div');
                    me.dropdownContainer.className = 'uxcore';
                    document.body.appendChild(me.dropdownContainer);
                }
                return me.dropdownContainer;
            })());
        }
        super.componentDidUpdate();
        me.haveOpened = haveOpened;
    }
}
Select2.displayName = 'Select2';
Select2.defaultProps = assign({}, RcSelect.defaultProps, {
    prefixCls: "kuma-select2",
    optionLabelProp: "children"
});

module.exports = Select2;