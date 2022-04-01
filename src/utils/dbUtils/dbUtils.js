function dbOutput_JSON(dbOutput) {
  dbOutput = JSON.stringify(dbOutput)
  dbOutput = JSON.parse(dbOutput)
  return dbOutput
}

module.exports ={
  dbOutput_JSON,
}
