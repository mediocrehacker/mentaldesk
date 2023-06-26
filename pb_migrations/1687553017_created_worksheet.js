migrate((db) => {
  const collection = new Collection({
    "id": "dnz4alzkkp2g3mm",
    "created": "2023-06-23 20:43:37.370Z",
    "updated": "2023-06-23 20:43:37.370Z",
    "name": "worksheet",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sbjnbfuq",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5fojtsdm",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm");

  return dao.deleteCollection(collection);
})
