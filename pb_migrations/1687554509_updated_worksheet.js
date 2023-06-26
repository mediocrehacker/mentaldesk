migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zpiqts5k",
    "name": "teaser",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  // remove
  collection.schema.removeField("zpiqts5k")

  return dao.saveCollection(collection)
})
