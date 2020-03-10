//分页高阶组件
import React from "react";
import { Pagination } from 'antd';



const paginateHoc = (WrappedComponent) =>
    class extends React.Component {

        constructor(props) {
            super(props)
            let { currentPage, dataSource, pageSize } = props
            //初始化数据
            const data = dataSource.slice((currentPage - 1) * pageSize, currentPage * pageSize - 1)
            this.state = {
                currentDataSource: data,
            }

        }

        //切换页码时触发
        /**
         * page 当前切换后页码
         * pageSize 一页最大记录数
         */
        PaginationChange = (page, pageSize) => {
            let { setCurrentPage } = this.props
            let newData = this.props.dataSource.slice((page - 1) * pageSize, page * pageSize - 1)
            this.setState({
                dataSource: newData,
            })
            setCurrentPage(page)
        }

        render() {
            const { currentDataSource } = this.state
            const { pageSize, currentPage } = this.props
            return (
                <div>
                    {/* 传进来的自定义组件 例子list将被传入这里*/}
                    <WrappedComponent dataSource={currentDataSource}></WrappedComponent>
                    {/* 蚂蚁金服ant的分页控件 */}
                    <Pagination current={currentPage} total={this.props.dataSource.length} pageSize={pageSize} onChange={this.PaginationChange} />
                </div>
            )
        }
    }


export default paginateHoc;

