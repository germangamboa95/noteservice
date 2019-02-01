const jsonApi = (data, { modelName }) => {
  if (!Array.isArray(data)) {
    data = [...data];
  }
  data = data.map(item => {
    const obj = {
      attributes: {}
    };

    obj.type = modelName;
    obj.id = item.id;

    const keys = Object.keys(item).filter(k => {
      return !k.includes(["id"]);
    });

    for (let key of keys) {
      obj.attributes[key] = item[key];
    }

    return obj;
  });
  return {
    data
  };
};

module.exports = jsonApi;
