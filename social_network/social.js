const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },

  // Implement a function biggestFollower() which returns the name of the individual who follows the most people.
  biggestFollower: function() {
    let biggest = "";
    let mostFollows = -1;
    let followArray = [];

    for (const individual in this) {
      followArray = this[individual].follows;
      // Error check to see that the current object actually has follows to count
      if (followArray) {
        if (followArray.length > mostFollows) {
          mostFollows = followArray.length;
          biggest = individual;
        }
      }
    }
    // Return the name of the individual who follows the most people
    return this[biggest].name;
  },

  // Implement mostPopular() which returns the name of the most popular (most followed) individual.
  mostPopular: function() {
    let followCount = {};
    let followArray = [];

    // Loop through all individuals in the data object
    for (const individual in this) {
      // Check that the current object is an individual (aka has follows to count)
      followArray = this[individual].follows;
      if (followArray) {
        // For each individual, run the countFollowers function to add to the total count of follows in ongoing object
        followCount = this.countFollowers(followCount, followArray);
      }
    }
    console.log(followCount);
    
    // Determine which individual has the most followers by reviewing the created object


    // Return Largest
  },

  countFollowers: function(numberOfFollowsObject, followArray) {
    for (const personFollowed of followArray) {
      // Check whether the person being followed already exists in the current numberOfFollows object.
      if (numberOfFollowsObject[personFollowed]) {
        numberOfFollowsObject[personFollowed] += 1;
      } else {
        numberOfFollowsObject[personFollowed] = 1;
      }
    }
    return numberOfFollowsObject;
  },

  

  // Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.

  // Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.

  // Implement some or all these remaining functions.

  // Identify who has the most followers over 30
  // Identify who follows the most people over 30
  // List everyone and their reach (sum of # of followers and # of followers of followers)

  // You are encouraged to create some additional functions in order to avoid having very large functions that try to do everything. That said, be sure to name them well. All this may sound familiar - that's because it was covered recently as part of our Function Best Practices series yesterday.

};
console.log(data.mostPopular());