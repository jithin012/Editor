const express = require('express')
const multer = require('multer')
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express()
app.use(cors());

const destinationFolder = path.join(__dirname, "uploads");

if (!fs.existsSync(destinationFolder)){
  fs.mkdirSync(destinationFolder);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destinationFolder)
  },
  filename: function (req, file, cb) {
    const ext = file.mimetype.startsWith('image/') ? file.mimetype.split('/')[1]: '';
    const fileName = file.fieldname + '-' + Date.now()+'.'+ext;
    cb(null, fileName)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post('/upload', upload.single('image'), function (req, res, next) {
  try {
    return res.status(201).json({
      url: 'https://avatars3.githubusercontent.com/u/69631?v=4'
    });
  } catch (error) {
    console.error(error);
  }
});

const port = 7200;
app.listen(port, () => {
  console.log(`app listne ${port}`);
})
