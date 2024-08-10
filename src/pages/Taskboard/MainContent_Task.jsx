import React, { useState, useEffect } from 'react';
import Header from './Header';
import Board from './Board';
import Modals from './Modals';
import axiosInstance from '../../config/axiosConfig';

const Taskboard = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axiosInstance.get('/board/all');
        setBoards(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBoards();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <Header />
          <div className="tasks-board mb-3" id="kanbanboard">
            {boards.map(board => (
              <Board key={board._id} title={board.boardName} boardId={board._id} boards={boards} />
            ))}
          </div>
          <Modals />
        </div>
      </div>
    </div>
  );
};

export default Taskboard;
