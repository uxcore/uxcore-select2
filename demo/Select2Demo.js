let Select = require('../src');
let {Option} = Select;

let children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

let tagChildren = [];
for (let i = 10; i < 36; i++) {
    tagChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: "",
            value2: "",
            value3: "",
            value4: ""
        };
    }

    handleChange1(value) {
        let me = this;
        me.setState({
            value1: value
        });
    }

    handleChange2(value) {
        let me = this;
        me.setState({
            value2: value
        });
    }

    render() {
        let me = this;
        return (
            <div>
                <p>基本使用:</p>
                <Select value={me.state.value1} style={{width:200}} onChange={me.handleChange1.bind(me)}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="yiminghe">yiminghe</Option>
                </Select>
                <p>带搜索框:</p>
                <Select value={me.state.value2} showSearch={true} style={{width:200}} onChange={me.handleChange2.bind(me)}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                    <Option value="disabled" disabled>disabled</Option>
                    <Option value="yiminghe">yiminghe</Option>
                </Select>
                <p>多选:</p>
                <Select 
                    multiple={true}
                    style={{width:400}}>
                    {children}
                </Select>
                <p>标签:(标签的意义是，用户可以通过键盘自己输入值，而不局限于传入的选项)</p>
                <Select
                    style={{width:400}}
                    tags={true}>
                    {tagChildren}
                </Select>
            </div>
        )
    }
}

module.exports = Demo;
