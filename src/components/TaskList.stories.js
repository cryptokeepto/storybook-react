import React from "react";
import TaskList from "./TaskList";

export default {
  component: TaskList,
  title: "TaskList"
};

const tasks = [
  // {
  //   id: 1,
  //   title: "mike",
  //   state: "ok"
  // },
  // {
  //   id: 2,
  //   title: "John",
  //   state: "bye"
  // }
];

export const Default = () => <TaskList tasks={tasks} loading={false} />;
