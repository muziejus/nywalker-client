import { Model, hasMany } from "ember-cli-mirage";

export default Model.extend({
  instances: hasMany()
});
