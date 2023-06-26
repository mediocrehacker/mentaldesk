migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  // remove
  collection.schema.removeField("jk5re6n7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4aixbykz",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5b6swsso",
    "name": "references",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zky7vgdq",
    "name": "pdf",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "application/pdf"
      ],
      "thumbs": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4ruqoun4",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jk5re6n7",
    "name": "description",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("4aixbykz")

  // remove
  collection.schema.removeField("5b6swsso")

  // remove
  collection.schema.removeField("zky7vgdq")

  // remove
  collection.schema.removeField("4ruqoun4")

  return dao.saveCollection(collection)
})
