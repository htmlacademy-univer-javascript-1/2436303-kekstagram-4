let names = ['Ivan', 'Igor', 'Dmitrij', 'Vlad', 'Gleb', 'Kolya', 'Anna', 'Marina', 'Galya'];
const text = 'Всё отлично! В целом всё неплохо. ' +
  'Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра.' +
  'В конце концов это просто непрофессионально.' +
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.' +
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.' +
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
const sentences = text.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/g);
const descriptionText = 'this is a jpg phpoto';
const maxLikes = 200;
const minLikes = 15;
const maxAvatarId = 6;
const minAvatarId = 1;
const maxCommentId = 1000;
const minCommentId = 1;

function getRandomValueFromTo(from, to) {
  return (Math.floor(Math.random() * (to - from)) + from);
}

function genereteMessage() {
  const message = [];
  const messageCount = getRandomValueFromTo(1, 2);
  for (let i = 0; i < messageCount; i++) {
    message[i] = sentences[getRandomValueFromTo(0, sentences.length)];
  }
  return message;
}

function generatecomment() {
  return {
    id: getRandomValueFromTo(minCommentId, maxCommentId),
    avatar: `img/avatar-${getRandomValueFromTo(minAvatarId, maxAvatarId)}.svg`,
    message: genereteMessage(),
    name: names[getRandomValueFromTo(0, names.length)]
  };
}
function generatecomments() {
  const comments = [];
  const commentsCount = getRandomValueFromTo(0, 30);
  for (let i = 0; i < commentsCount; i++) {
    comments[i] = generatecomment();
  }
  return comments;
}

function createPhootoSet(number) {
  const photoSet = [];
  for (let i = 0; i < number; i++) {
    const photo = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      despription: descriptionText,
      likes: Math.floor(Math.random() * (maxLikes - minLikes + 1)) + minLikes,
      comments: generatecomments()
    };
    photoSet[i] = photo;
  }
  return photoSet;
}

