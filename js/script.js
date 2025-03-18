// task 1

const calculateTotalBalance = users => users.reduce((sum, user) => sum + user.balance, 0);


// task 2

const getUsersWithFriend = (users, friend) => users
    .filter(user => user.friends.includes(friend))
    .map(user => user.name);


// task 3


const getNamesSortedByFriendsCount = users => users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);



// task 4

const getSortedUniqueSkills = users => [...new Set(users.flatMap(user => user.skills))].sort();

