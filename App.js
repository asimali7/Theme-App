import React, { Component } from "react";
class App extends Component {
  state = {
    color: "",
    bgcolor: "",
    _id: "",
    text: "",
    enable: false,
    list: [],
  };

  handleadd = () => {
    const lists = this.state.list;
    const c = this.state.color;
    const d = this.state.bgcolor;
    const e = this.state.enable;
    const t = this.state.text;
    const i = Date.now();

    lists.push({ color: c, bgcolor: d, enable: e, _id: i, text: t });
    this.setState({ color: c, bgcolor: d, enable: e, _id: i, text: t });
    this.setState({ color: "", bgcolor: "", text: "" });

    console.log(lists);
  };

  disableproduct = (counter) => {
    const listse = [...this.state.list];

    listse.forEach((lists) => {
      if (lists._id === counter) {
        lists.enable = false;
      } else {
        lists.enable = true;
      }
    });
    const data = [...listse];
    this.setState({ list: data });

    console.log({ data });
  };
  Enableproduct = (counter) => {
    const listse = [...this.state.list];

    listse.forEach((lists) => {
      if (lists._id === counter) {
        lists.enable = true;
      } else {
        lists.enable = false;
      }
    });
    const data = [...listse];

    this.setState({ list: data });

    console.log({ data });
  };
  handledelete = (key) => {
    const items = this.state.list.filter((item) => item._id !== key);
    this.setState({ list: items });
    console.log({ items });
  };

  render() {
    return (
      <div>
        <input
          style={{ width: 500, height: 100 }}
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
          placeholder="Enter text here"
        ></input>
        <br />
        <br />
        <br />
        <div>
          <input
            input="text"
            placeholder="Enter font color"
            value={this.state.color}
            onChange={(e) => this.setState({ color: e.target.value })}
          ></input>
          <input
            input="text"
            placeholder="Enter backgroundcolor"
            value={this.state.bgcolor}
            onChange={(e) => this.setState({ bgcolor: e.target.value })}
          ></input>
          <button
            onClick={this.handleadd}
            className="btn btn-sm btn-primary m-1"
          >
            Add Theme
          </button>
        </div>
        <div>
          {this.state.list.map((lists) => (
            <div key={lists._id}>
              <div>
                {lists.enable === true ? (
                  <span
                    style={{
                      backgroundColor: lists.bgcolor,
                      color: lists.color,
                    }}
                  >
                    {lists.text}
                  </span>
                ) : (
                  <span>{lists.text}</span>
                )}
              </div>
              <div>
                {lists.enable === true ? (
                  <div
                    className="btn btn-warning btn-sm m-3"
                    onClick={() => this.disableproduct(lists._id)}
                  >
                    Disable
                  </div>
                ) : (
                  <div
                    onClick={() => this.Enableproduct(lists._id)}
                    className="btn btn-info btn-sm m-3"
                  >
                    Enable
                  </div>
                )}

                <button
                  className="btn btn-danger btn-sm m-3"
                  onClick={() => this.handledelete(lists._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
