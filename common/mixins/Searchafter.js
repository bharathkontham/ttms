module.exports = (Model) => {
  Model.defineProperty('_search_after', {
    type: ['any']
  });
  Model.defineProperty('_total_count', {
    type: 'number'
  });
};
