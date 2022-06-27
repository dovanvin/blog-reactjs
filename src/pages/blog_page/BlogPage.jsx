import React from "react";
import ContentLayout from "../../components/layout/content_layout/ContentLayout";
import TodoList from "../../components/todo_list/TodoList";
import "./Blog.scss";

const BlogPage = () => {
  return (
    <div>
      <ContentLayout>
        <TodoList></TodoList>
      </ContentLayout>
    </div>
  );
};

export default BlogPage;
