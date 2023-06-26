migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dnz4alzkkp2g3mm")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
