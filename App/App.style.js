module.exports = `html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  color: #232323;
}

#root {
  height: 100%;
  display: flex;
  flex: 1;
}

.App {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  font-size: 24px;
  padding: 20px;
  transition: background-color 0.2s ease;

  button {
    color: #232323;
    cursor: pointer;
    background: none;
    border: solid 1px #232323;
    padding: 15px;
    font-size: inherit;
    font-weight: bold;

    &:focus {
      outline: 0;
    }
  }
}
`;
