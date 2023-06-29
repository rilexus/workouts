const sleep = (time) => new Promise((res) => setTimeout(res, time));

const forEach = async (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    await callback(array[i]);
  }
};

export { sleep, forEach };
