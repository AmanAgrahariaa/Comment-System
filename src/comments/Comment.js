// Comment.js

import React, { useState } from 'react';
import CommentForm from './CommentForm';
import { FaThumbsUp, FaThumbsDown, FaReply, FaEdit, FaTrash } from 'react-icons/fa';

const Comment = ({
  comment,
  allComments,
  activeComment,
  setActiveComment,
  addComment,
  deleteComment,
  updateComment,
  currentUserId,
  depth = 0,
}) => {
  const [vote, setVote] = useState(null); // State to manage upvote/downvote
  const [upvotes, setUpvotes] = useState(comment.upvotes || 0);
  const [downvotes, setDownvotes] = useState(comment.downvotes || 0);

  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'editing' &&
    !timePassed;

  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === 'replying';

  const canDelete =
    currentUserId === comment.userId &&
    (!comment.replies || comment.replies.length === 0);

  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();

  // Find replies using allComments data
  const replies = allComments.filter((c) => c.parentId === comment.id);

  const handleVote = (selectedVote) => {
    if (currentUserId === comment.userId) {
      // Current user can't upvote or downvote their own comments
      return;
    }

    if (selectedVote === vote) {
      // If the same vote is selected again, unselect it
      setVote(null);
      selectedVote === 'upvote' ? setUpvotes(upvotes - 1) : setDownvotes(downvotes - 1);
    } else {
      // If a different vote is selected, update accordingly
      if (vote === 'upvote') {
        setUpvotes(upvotes - 1);
      } else if (vote === 'downvote') {
        setDownvotes(downvotes - 1);
      }
  
      setVote(selectedVote);
      selectedVote === 'upvote' ? setUpvotes(upvotes + 1) : setDownvotes(downvotes + 1);
    }
  };

  return (
    <div
      key={comment.id}
      className="comment"
      style={{ marginLeft: depth * 20 + 'px', marginBottom: '10px' }}
    >
      <div className="comment-image-container">
        <img src="/user-icon.png" alt="User Icon" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author" style={{ fontWeight: 'bold', color: '#333' }}>
            {comment.username}
          </div>
          <div style={{ color: '#666', fontSize: '12px', marginBottom: '5px' }}>{createdAt}</div>
        </div>
        {!isEditing && (
          <div className="comment-text" style={{ marginBottom: '10px', color: '#222', fontSize: '14px' }}>
            {comment.body}
          </div>
        )}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions" style={{ display: 'flex', alignItems: 'center', fontSize: '12px' }}>
          {canReply && depth < 5 && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'replying' })
              }
              style={{ marginRight: '10px', cursor: 'pointer', color: '#3498db' }}
            >
              <FaReply style={{ marginRight: '5px' }} /> Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment.id, type: 'editing' })
              }
              style={{ marginRight: '10px', cursor: 'pointer', color: '#2ecc71' }}
            >
              <FaEdit style={{ marginRight: '5px' }} /> Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment.id)}
              style={{ marginRight: '10px', cursor: 'pointer', color: '#e74c3c' }}
            >
              <FaTrash style={{ marginRight: '5px' }} /> Delete
            </div>
          )}
          {/* Upvote and Downvote buttons */}
          <div
            className={`comment-action ${currentUserId === comment.userId ? 'disabled' : ''}`}
            onClick={() => handleVote('upvote')}
            style={{ marginRight: '10px', cursor: 'pointer', color: vote === 'upvote' ? '#3498db' : '#333' }}
          >
            <FaThumbsUp style={{ marginRight: '5px' }} /> Upvote ({upvotes})
          </div>
          <div
            className={`comment-action ${currentUserId === comment.userId ? 'disabled' : ''}`}
            onClick={() => handleVote('downvote')}
            style={{ cursor: 'pointer', color: vote === 'downvote' ? '#e74c3c' : '#333' }}
          >
            <FaThumbsDown style={{ marginRight: '5px' }} /> Downvote ({downvotes})
          </div>
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                key={reply.id}
                comment={reply}
                allComments={allComments} // Pass allComments to nested comments
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                currentUserId={currentUserId}
                depth={depth + 1} // Incrementing the depth for replies
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;

