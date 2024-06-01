import React from 'react';
import Board from './Board';
import Header from './Header';
import Modals from './Modals';

function Taskboard() {
    const unassignedTasks = [
  {
    id: 'VL2436',
    title: 'Profile Page Structure',
    description: 'Profile Page means a web page accessible to the public or to guests.',
    labels: ['Admin'],
    members: [{ name: 'Alexis', avatar: 'path_to_avatar_image' }, { name: 'Nancy', avatar: 'path_to_avatar_image' }],
    views: 4,
    comments: 19,
    attachments: 2,
    date: '03 Jan, 2022',
    progress: 15
  },];
   const todoTasks = [
  {
    id: 'VL2436',
    title: 'Profile Page Structure',
    description: 'Profile Page means a web page accessible to the public or to guests.',
    labels: ['Admin'],
    members: [{ name: 'Alexis', avatar: 'path_to_avatar_image' }, { name: 'Nancy', avatar: 'path_to_avatar_image' }],
    views: 4,
    comments: 19,
    attachments: 2,
    date: '03 Jan, 2022',
    progress: 15
  },
  
   ];
      const inReviewTasks = [
  {
    id: 'VL2436',
    title: 'Profile Page Structure',
    description: 'Profile Page means a web page accessible to the public or to guests.',
    labels: ['Admin'],
    members: [{ name: 'Alexis', avatar: 'path_to_avatar_image' }, { name: 'Nancy', avatar: 'path_to_avatar_image' }],
    views: 4,
    comments: 19,
    attachments: 2,
    date: '03 Jan, 2022',
    progress: 15
  },
  
   ];
      const inProgressTasks = [
  {
    id: 'VL2436',
    title: 'Profile Page Structure',
    description: 'Profile Page means a web page accessible to the public or to guests.',
    labels: ['Admin'],
    members: [{ name: 'Alexis', avatar: 'path_to_avatar_image' }, { name: 'Nancy', avatar: 'path_to_avatar_image' }],
    views: 4,
    comments: 19,
    attachments: 2,
    date: '03 Jan, 2022',
    progress: 15
  },
  
   ];
     const completedTasks = [
  {
    id: 'VL2436',
    title: 'Profile Page Structure',
    description: 'Profile Page means a web page accessible to the public or to guests.',
    labels: ['Admin'],
    members: [{ name: 'Alexis', avatar: 'path_to_avatar_image' }, { name: 'Nancy', avatar: 'path_to_avatar_image' }],
    views: 4,
    comments: 19,
    attachments: 2,
    date: '03 Jan, 2022',
    progress: 15
  },
  
   ];
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <Header />
          <div className="tasks-board mb-3" id="kanbanboard">
            <Board title="Unassigned" tasks={unassignedTasks} />
            <Board title="To Do" tasks={todoTasks} />
            <Board title="In Progress" tasks={inProgressTasks} />
            <Board title="In Reviews" tasks={inReviewTasks} />
            <Board title="Completed" tasks={completedTasks} />
            {/* <Board title="New" tasks={newTasks} /> */}
          </div>
          <Modals />
        </div>
      </div>
    </div>
  );
}

export default Taskboard;
