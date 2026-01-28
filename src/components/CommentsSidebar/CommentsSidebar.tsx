import { useState, useEffect } from "react";
import ReviewModal from "../ReviewModal/ReviewModal";
import "./CommentsSidebar.scss";

const STORAGE_KEY = "cvComments";

const CommentsSidebar: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return;

      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) return;

      setTimeout(() => setComments(parsed), 0);
    } catch (error) {
      console.error("Failed to parse comments from localStorage", error);
    }
  }, []);

  const handleSaveComment = (comment: string) => {
    const updatedComments = [comment, ...comments];
    setComments(updatedComments);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedComments));
  };

  return (
    <aside className="comments-sidebar">
      <button
        className="comments-sidebar__button"
        onClick={() => setIsModalOpen(true)}
      >
        Review
      </button>

      <h3 className="comments-sidebar__title">Comments</h3>

      <div className="comments-sidebar__content">
        {comments.length === 0 ? (
          <p className="comments-sidebar__empty">No comments yet</p>
        ) : (
          <ul className="comments-sidebar__list">
            {comments.map((comment, index) => (
              <li key={index} className="comments-sidebar__item">
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveComment}
      />
    </aside>
  );
};

export default CommentsSidebar;
