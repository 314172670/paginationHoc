// 被包裹的组件
import React, { Component } from 'react';

class List extends Component {
    
   
    render() {
        return (
            <table border="1"  align="center" valign="center" style={{margin:'10px auto'}}>
                <thead>
                    <tr>
                        <th>城市</th>
                        <th>年龄</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.dataSource.map((data)=> {
                            return (
                                <tr key={data.id}>
                                    <td>{data.name}</td>
                                    <td>{data.value}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default List;

