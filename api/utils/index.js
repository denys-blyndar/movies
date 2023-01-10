const multer = require('multer');

const digitMatch = (str) => /\d/.test(str);

const selectInvalidYears = (lines, string) => {
  const invalidYears = [];

  lines
    .filter((val) => val.includes(string))
    .map((el) => el.split(':'))
    .forEach((item) =>
      item.map((value) => {
        if (digitMatch(value)) {
          const num = Number.parseInt(value);

          if (num < 1850 || num > 2023) {
            invalidYears.push[num];
          }
        }
      }),
    );

  return invalidYears;
};

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './api/uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname);
  },
});

const upload = multer({ storage }).single('file');

module.exports = { selectInvalidYears, upload };
