const csjs = require('csjs');

module.exports = csjs`

.box,
.box:before,
.box:after {
  box-sizing: inherit;
}

.box {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;

  background: transparent;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  display: block;
  padding: 20px;
}

a.box:hover, a.box:focus {
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px #1fc8db;
}

a.box:active {
  box-shadow: inset 0 1px 2px rgba(17, 17, 17, 0.2), 0 0 0 1px #1fc8db;
}

.box:not(:last-child) {
  margin-bottom: 20px;
}
`;
