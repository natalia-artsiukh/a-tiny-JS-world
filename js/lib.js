const man = {
  hands: 2,
  legs: 2,
  name: 'Bob',
  gender: 'male',
  saying: 'I\'m vegan',
  friends: 'no one'
};
const woman = {
  hands: 2,
  legs: 2,
  name: 'Mary',
  gender: 'female',
  saying: 'Hi everyone!',
  friends: 'Tom, Rex, Halle'
};
const cat = {
  hands: 0,
  legs: 4,
  name: 'Tom',
  gender: 'male',
  saying: 'Mrrrr',
  friends: 'Mary, Halle'
};
const dog = {
  hands: 0,
  legs: 4,
  name: 'Rex',
  gender: 'male',
  saying: 'Woof',
  friends: 'Mary'
};
const catwoman = {
  __proto__:cat,
  hands: 2,
  legs: 2,
  name: 'Halle',
  gender: 'female',
  friends: 'Mary, Tom, Batman'
};

print(man.saying + '. My name is ' + man.name + '. I\'m ' + man.gender + '. I have ' + man.hands + ' hands and ' + man.legs + ' legs. I\'m friends with ' + man.friends + '.');
print(woman.saying + ' My name is ' + woman.name + '. I\'m ' + woman.gender + '. I have ' + woman.hands + ' hands and ' + woman.legs + ' legs. I\'m friends with ' + woman.friends + '.');
print(cat.saying + '. My name is ' + cat.name + '.  I\'m ' + cat.gender + '. I have ' + cat.hands + ' hands but ' + cat.legs + ' legs. I\'m friends with ' + cat.friends + '.');
print(dog.saying + '. My name is ' + dog.name + '.  I\'m ' + dog.gender + '. I have ' + dog.hands + ' hands but ' + dog.legs + ' legs. I\'m friends with ' + dog.friends + '.');
print(catwoman.saying + '. My name is ' + catwoman.name + '.  I\'m ' + catwoman.gender + '. I have ' + catwoman.hands + ' hands and ' + catwoman.legs + ' legs. I\'m friends with ' + catwoman.friends + '.');

function print(message, tag = 'pre') {
  var element = document.createElement(tag);
  element.innerHTML = message;
  console.log('PRINT:', message);
  document.getElementById('main').appendChild(element);
}

function makeGitHubLink(currentUrl, filePath) {
  var prefix = currentUrl.split('//')[0];
  var domainComponents = currentUrl.split('//')[1].split('/')[0].split('.');
  var basePath = currentUrl.split('//')[1].split('/')[1];
  basePath = '/' + basePath + (basePath.length ? '/' : '');
  var targetDomain = (domainComponents.length > 1)
    ? 'github.com/' + domainComponents[0]
    : domainComponents[0];
  return prefix + '//' + targetDomain + basePath + (domainComponents.length > 1 ? 'blob/gh-pages/' : '') + filePath;
}

(function (elementId) {
  var element = document.getElementById(elementId);
  element.href = makeGitHubLink(location.href, 'index.js');
})('source-code');

