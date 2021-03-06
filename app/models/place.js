import DS from "ember-data";
import { and, collect } from "@ember/object/computed";

export default DS.Model.extend({
  name: DS.attr("string"),
  slug: DS.attr("string"),
  confidence: DS.attr("string"),
  source: DS.attr("string"),
  geonameid: DS.attr("string"),
  what3word: DS.attr("string"),
  bounding_box_string: DS.attr("string"),
  note: DS.attr("string"),
  nickname_sentence: DS.attr("string"),
  lat: DS.attr("number"),
  lon: DS.attr("number"),
  instance_count: DS.attr("number"),
  added_on: DS.attr("date"), //?
  flagged: DS.attr("boolean"),

  nicknames: DS.hasMany("nickname"),
  instances: DS.hasMany("instance"),

  mappable: and("lat", "lon"),
  latLng: collect("lat", "lon")

});
