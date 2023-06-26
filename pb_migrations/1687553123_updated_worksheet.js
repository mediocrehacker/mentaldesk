migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bymd2eef",
    "name": "test",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  // remove
  collection.schema.removeField("bymd2eef")

  return dao.saveCollection(collection)
})
