import React,{useEffect} from 'react';
import {Layout,List,Pagination} from "antd";
import IndexMenu from './indexMenu';
import {useLocation,Link,useHistory} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {getList} from "../../store/action/index";
import qs from "qs";
function Index() {
  let {loading,data} = useSelector(state=>state.list);
  let dispatch = useDispatch();
  let {search} = useLocation();
  let histroy = useHistory();
  search = qs.parse(search.substr(1));
  let {page=1,tab="all"} = search;
  useEffect(()=>{
    dispatch(getList(search));
  },[page,tab]);
  return (
    <div>
      <Layout.Content className="main">
          <List
            header={ <IndexMenu />}
            dataSource={data}
            loading = {loading}
            renderItem={item =>{
              return (
                <List.Item>
                  <Link to={"/topic/"+item.id}>{item.title}</Link>
                </List.Item>
            )}}
            footer={<Pagination
              total={100}
              onChange={(pageNub) => {
                  histroy.push(`/?tab=${tab}&page=${pageNub}`);
                }
              }
              pageSize={1}
              defaultCurrent={Number(page)}
    />}
          >
          </List>
         
      </Layout.Content>
    </div>
  );
}

export default Index;
