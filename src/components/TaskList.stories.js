import React from "react";
import TaskList from "./TaskList";
import { actionsData } from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList"
};

const tasks = [
  {
    id: 1,
    title: "mike",
    state: "ok"
  },
  {
    id: 2,
    title: "John",
    state: "bye"
  }
];

const withTaskPinned = [
  ...tasks,
  {
    id: 3,
    title: "oho",
    state: "TASK_PINNED"
  }
];

export const Default = () => <TaskList tasks={tasks} actions={actionsData} />;

export const Loading = () => <TaskList loading={true} />;

export const Emply = () => <TaskList tasks={[]} />;

export const WithPinnedTask = () => (
  <TaskList tasks={withTaskPinned} actions={actionsData} />
);
