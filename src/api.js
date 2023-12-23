export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Aman Root comment",
      username: "Aman",
      userId: "1",
      parentId: null,
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 5,
      downvotes: 2,
    },
    {
      id: "2",
      body: "Vikas root comment",
      username: "Vikas",
      userId: "2",
      parentId: null,
      createdAt: "2023-12-20T23:00:33.010+02:00",
      upvotes: 3,
      downvotes: 1,
    },
    {
      id: "3",
      body: "First Reply on Aman's comment by Dipankar",
      username: "Dipankar",
      userId: "3",
      parentId: "1",
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 1,
      downvotes: 0,
    },
    {
      id: "4",
      body: "First Reply on Aman's comment by Rishav",
      username: "Rishav",
      userId: "4",
      parentId: "2",
      createdAt: "2023-12-20T23:00:33.010+02:00",
      upvotes: 2,
      downvotes: 0,
    },
    {
      id: "5",
      body: "Root Comment by Dipankar",
      username: "Dipankar",
      userId: "3",
      parentId: null,
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 8,
      downvotes: 3,
    },
    {
      id: "6",
      body: "First Reply on Dipankar's comment by Vikas",
      username: "Vias",
      userId: "2",
      parentId: "5",
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 2,
      downvotes: 1,
    },
    {
      id: "7",
      body: "Second Reply on Aman's comment by Rishav",
      username: "Rishav",
      userId: "4",
      parentId: "1",
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 1,
      downvotes: 0,
    },
    {
      id: "8",
      body: "First Reply on Rishav's reply comment by Vikas",
      username: "Vikas",
      userId: "2",
      parentId: "7",
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 1,
      downvotes: 0,
    },
    {
      id: "9",
      body: "First Reply on Rishav's reply comment by Aman",
      username: "Aman",
      userId: "1",
      parentId: "4",
      createdAt: "2023-12-21T23:00:33.010+02:00",
      upvotes: 1,
      downvotes: 0,
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "0",
    username: "John",
    createdAt: new Date().toISOString(),
    upvotes: 0,
    downvotes: 0,
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
