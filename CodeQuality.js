// <!-- Level 2 -->

// <!-- Re-write the below code to better code quality standards. Hint: use modern ES6 syntax and reduce lines of code. -->

const getUsers =async ()=> {
  let doc = await Promise.all(getUser(), getProfile(), getPosts()); 
  let user = doc[0];
  let Profile = doc[1];
  let p = doc[2];
  const userProfile = {
    user: user,
    profile: Profile,
    posts: p
  };

 
}