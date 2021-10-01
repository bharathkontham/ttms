module.exports = (Model) => {
  // Model is the model class
  // options is an object containing the config properties from model definition
  Model.defineProperty('createdAt', {
    type: 'date'
  });
  // before Save
  Model.observe('before save', (ctx, next) => {
    if (ctx.isNewInstance) {
      ctx.instance.createdAt = new Date();
    } else if (ctx.data) {
      ctx.data.createdAt = new Date();
    } else if (ctx.options && ctx.options.validate) {
      ctx.instance.createdAt = new Date();
    } else if (typeof ctx.currentInstance === 'undefined' && typeof ctx.data === 'undefined') {
      ctx.instance.createdAt = new Date();
    }
    next();
  });
};
