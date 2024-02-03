import { Octokit } from '@octokit/core'
 

const octokit = new Octokit({ 
  auth: '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'
});

export const fetchUsers = async (searchQuery)=>{
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