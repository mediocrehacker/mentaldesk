migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  collection.listRule = null

  return dao.saveCollection(collection)
})
