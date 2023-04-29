function generateUUID() {
  const groups = [];

  for (let i = 0; i < 5; i++) {
    let group = "";
    for (let j = 0; j < 4; j++) {
      group += Math.floor(Math.random() * 36).toString(36);
    }
    groups.push(group);
  }

  return groups.join("-");
}

export default generateUUID;
