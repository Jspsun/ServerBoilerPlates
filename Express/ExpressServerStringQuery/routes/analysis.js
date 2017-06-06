module.exports = (req, res) => {
  var inputText = req.params.inputText;

  var analysisResult = {
    message: inputText
  };
  res.status(200).json(analysisResult);
};
