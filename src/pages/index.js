import styles from './index.css';
import React, { useState, useEffect } from 'react';
import paginateHoc from '../component/paginateHoc'
import List from '../component/list'
import axios from 'axios'

export default function () {
  //总数据源
  const [dataSource, setDatasource] = useState([])
  //当前默认页码
  const [currentPage, setCurrentPage] = useState(1)


  useEffect(() => {
    getData()  //获取Mock数据  在文件mock/api.js
  }, [])

  //需要传入的数据
  const data = {
    dataSource: dataSource,  //数据源
    pageCount: dataSource.length, //总记录数
    pageSize: 10,  //每页条数
    currentPage: currentPage,  //默认的当前页数
    setCurrentPage  //切换页码时修改当前默认页码的值
  }
  const getData = async () => {

    const res = await axios.get('api/tags')
    setDatasource(res.data.list)
  }


  const PaginationCom = paginateHoc(List)



  return (
    <PaginationCom {...data} />
  );
}
