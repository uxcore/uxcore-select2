import React from 'react';
import Select from '../src';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const tagChildren = [];
for (let i = 10; i < 36; i++) {
  tagChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const provinceData = ['浙江', '江苏'];
const cityData = {
  浙江: ['杭州', '宁波', '温州'],
  江苏: ['南京', '苏州', '镇江'],
};

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      options: [],
      ajaxData: [],
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      size: 'large',
    };
  }

  onTextChange(e) {
    this.setState({
      input1: e.target.value,
    });
  }

  onSecondCityChange(value) {
    this.setState({
      secondCity: value,
    });
  }

  fetchData(value) {
    const me = this;
    $.ajax({
      url: 'http://suggest.taobao.com/sug',
      dataType: 'jsonp',
      data: { q: value },
      success: (data) => {
        me.setState({
          ajaxData: data.result,
        });
      },
      fail: () => {
        console.log('Fetch Data failed');
      },
    });
  }

  handleSearch(value) {
    const me = this;
    me.fetchData(value);
  }

  handleMailChange(value) {
    let options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({
      options,
    });
  }

  handleProvinceChange(value) {
    this.setState({
      cities: cityData[value],
      secondCity: cityData[value][0],
    });
  }


  handleChange(value) {
    console.log(`selected ${value}`);
    this.forceUpdate();
  }

  render() {
    const me = this;
    const provinceOptions = provinceData.map(province =>
      <Option key={province}>{province}</Option>);
    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
    const ajaxOptions = me.state.ajaxData.map(d => <Option key={d[1]}>{d[0]}</Option>);
    return (
      <div className="demo" >
        <div id="container">
          <p>尺寸:</p>
          <Select
            size={this.state.size}
            allowClear
            value={this.state.size}
            style={{ width: 200 }}
            onChange={(size) => { this.setState({ size }); }}
          >
            <Option value="large">large</Option>
            <Option value="middle">middle</Option>
            <Option value="small">small</Option>
          </Select>
          <p>基本使用:</p>
          <Select
            size={this.state.size}
            placeholder="请选择"
            notFoundContent=""
            style={{ width: 200 }}
            onChange={me.handleChange.bind(me)}
            allowClear
            getPopupContainer={function () {
              return document.getElementById('container');
            }} dropdownClassName="kuma-select2-selected-has-icon"
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">LucyLucyLucyLucyLucyLucyLucyLucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
          <p>带搜索框:</p>
          <Select
            size={this.state.size} defaultValue="lucy" showSearch style={{ width: 200 }} searchPlaceholder="输入" onChange={me.handleChange.bind(me)}
          >
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="disabled" disabled>disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
          <p>多选:</p>
          <Select
            size={this.state.size} multiple style={{ width: 400 }} defaultValue={['a10', 'c12']} placeholder="输入" onChange={me.handleChange.bind(me)} allowClear
          >
            {children}
          </Select>
          <p>多选提示，提示项根据 ajax 获得</p>
          <Select
            size={this.state.size}
            multiple
            filterOption={false}
            style={{ width: 400 }}
            onSearch={me.handleSearch.bind(me)}
            onChange={me.handleChange.bind(me)}
          >
            {ajaxOptions}
          </Select>
          <p>标签:(标签的意义是，用户可以通过键盘自己输入值，而不局限于传入的选项)</p>
          <Select
            size={this.state.size} style={{ width: '100%' }} searchPlaceholder="标签模式" tags onChange={me.handleChange.bind(me)}
          >
            {tagChildren}
          </Select>
          <p>智能提示</p>
          <Select
            size={this.state.size}
            combobox
            style={{ width: 200 }}
            onChange={this.handleMailChange.bind(this)}
            filterOption={false}
            searchPlaceholder="请输入账户名"
          >
            {this.state.options}
          </Select>
          <p>联动</p>
          <Select
            size={this.state.size}
            defaultValue={provinceData[0]}
            style={{ width: 150 }}
            onChange={this.handleProvinceChange.bind(this)}
          >
            {provinceOptions}
          </Select>
          &nbsp;
          <Select
            size={this.state.size}
            value={this.state.secondCity}
            style={{ width: 150 }}
            onChange={this.onSecondCityChange.bind(this)}
          >
            {cityOptions}
          </Select>
          <p>Combo 模式</p>
          <Select
            size={this.state.size} combobox
          >
            {cityOptions}
          </Select>
          <p>禁用</p>
          <Select
            size={this.state.size} defaultValue="lucy" style={{ width: 200 }} disabled
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
          <p>inline</p>
          <Select
            size={this.state.size}
            className="kuma-select2-inline"
            placeholder="请选择"
            showSearch={false}
            dropdownMatchSelectWidth={false}
            dropdownClassName="kuma-select2-inline-dropdown"
            dropdownAlign={{
              offset: [0, -3],
            }}
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>

        </div>
      </div>
    );
  }
}

export default Demo;
