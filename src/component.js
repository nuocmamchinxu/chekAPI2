import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./redux/action";

import { Button } from "antd";

const FetPost = () => {
  const dispatch = useDispatch();
  const fetchPost = () => {
    dispatch(fetchDataRequest());
  };

  const state = useSelector((state) => ({ ...state.app }));
  return (
    <>
      <h2>Fetch post use redux-saga</h2>
      {!state.loading &&
        state.posts.map((post) => (
          <ul>
            <li key={post.id} className="list-item">
              {post.body}
            </li>
          </ul>
        ))}

      <Button onClick={fetchPost} type="primary">
        Fetch
      </Button>
    </>
  );
};
export default FetPost;
