import { Octokit } from '@octokit/core'
 

const octokit = new Octokit({ 
  auth: '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'
});

export const fetchUsers = async (searchQuery)=>{
  console.log(" funcion getting called");
    const searchResponse = await octokit.request('GET /search/users', {
      q: searchQuery ? searchQuery :"a",
      sort: 'followers'
    });
     
    const users = searchResponse.data.items;
    const userDetailsArray = [];
     
    for (const user of users) {
      const userResponse = await octokit.request('GET /users/{username}', {
        username: user.login
      });
     
     const { login, followers, public_repos, avatar_url } = userResponse.data;
    
      userDetailsArray.push({
        username: login,
        followers: followers,
        totalRepos: public_repos,
        avatarUrl: avatar_url
      });
    }
     
    // userDetailsArray now contains the detailed information for each user
    console.log("userdetals array = ",userDetailsArray);
    return userDetailsArray;
}