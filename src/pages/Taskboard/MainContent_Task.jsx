import React from 'react';
import Board from './Board';
import Header from './Header';
import Modals from './Modals';

function Taskboard() {
    const unassignedTasks = [
  {
    id: 'VL2436',
    title: 'Project deployment',
    description: 'deploy the project on docker ',
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
    title: 'fix notification systeme',
    description: 'notification gets delayed by few seconds , we need to fix it',
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
    title: 'design',
    description: 'design improved for instant messaging ',
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
    title: 'Landing page',
    description: 'Design and create landing page for guestes to explore the platform.',
    labels: ['Admin'],
    members: [{ name: 'Alexis', avatar: 'path_to_avatar_image' }, { name: 'Nancy', avatar: 'path_to_avatar_image' }],
    views: 4,
    comments: 19,
    attachments: 2,
    date: '03 Jan, 2022',
    progress: 15
  },
   ];

   const test = [
  {
    id: '',
    title: '',
    description: '',
    labels: ['Admin'],
    members: [],
    views: '',
    comments: '',
    attachments: '',
    date: '03 Jan, 2022',
    progress: ''
  },
]
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
            <Board title="test" tasks={test} />
            {/* <Board title="New" tasks={newTasks} /> */}
          </div>
          <Modals />
        </div>
      </div>
    </div>
  );
}

export default Taskboard;
