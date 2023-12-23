// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPost from "./components/AllPost";
import Post from "./components/Post";
import Navbar from "./header/Navbar";
import Login from "./header/Login";
import SignUp from "./header/SignUp";
import Profile from "./header/Profile";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
          <Routes>
          <Route path="/" element={<AllPost />} />
          <Route path="/post/:id" element={<Post />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// // import Comments from "./comments/Comments";
// import Blogs from "./components/blogs";

// const App = () => {
//   return (
//     <div>
//       {/* <h1>Blog 1</h1> */}
//       <Blogs title="blog 1" content="this is blog 1 content"/>
//       {/* <Comments
//         commentsUrl="http://localhost:3004/comments"
//         currentUserId="0"
//       /> */}
//     </div>
//   );
// };

// export default App;
