import '../style/kuma/src/less/kuma.less';
import React from 'react';
import Select from '../index.js';
let Option = Select.Option;

function handleChange(value) {
  console.log('selected ' + value);
}

let children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

let tagChildren = [];
for (let i = 10; i < 36; i++) {
  tagChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

React.render(
	<div>
		<p>基本使用:</p>
		<Select value="lucy" style={{width:200}} onChange={handleChange}>
			<Option value="jack">Jack</Option>
			<Option value="lucy">Lucy</Option>
			<Option value="disabled" disabled>Disabled</Option>
			<Option value="yiminghe">yiminghe</Option>
		</Select>
		<p>带搜索框:</p>
		<Select value="lucy" showSearch={true} style={{width:200}} onChange={handleChange}>
			<Option value="jack">jack</Option>
			<Option value="lucy">lucy</Option>
			<Option value="disabled" disabled>disabled</Option>
			<Option value="yiminghe">yiminghe</Option>
		</Select>
		<p>多选:</p>
		<Select multiple
	  		style={{width:400}}
	  		value={['a10', 'c12']} onChange={handleChange}>
	    	{children}
	  	</Select>
		<p>标签:</p>
		<Select
	   		style={{width:400}}
	  		tags value={['name2', 'name3']} onChange={handleChange}>
    		{tagChildren}
	  	</Select>
	</div>,
	document.getElementById('content')
);

var Test = React.createClass({
  getInitialState() {
    return {
      options: []
    };
  },
  handleChange(value) {
    var options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map(function(domain) {
        var email = value + '@' + domain;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({
      options: options
    });
  },
  render() {
    return <Select combobox
      style={{width:200}}
      onChange={this.handleChange}
      searchPlaceholder="请输入账户名">
      {this.state.options}
    </Select>;
  }
});

React.render(<Test />, document.getElementById('components-select-demo-combobox'));
