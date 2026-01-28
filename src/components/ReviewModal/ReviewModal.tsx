import { useState } from "react";
import "./ReviewModal.scss";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (comment: string) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    const trimmedComment = comment.trim();
    if (!trimmedComment) return;

    onSave(trimmedComment);
    setComment("");
    onClose();
  };

  const handleClose = () => {
    setComment("");
    onClose();
  };

  return (
    <div className="review-modal__overlay" onClick={handleClose}>
      <div
        className="review-modal__container"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="review-modal__title">Add your comment</h3>

        <textarea
          className="review-modal__textarea"
          rows={8}
          placeholder="Write your comment here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="review-modal__actions">
          <button
            className="review-modal__button review-modal__button--primary"
            onClick={handleSave}
          >
            Save
          </button>
          <button className="review-modal__button" onClick={handleClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
