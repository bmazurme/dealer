/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
import React from 'react';
import './app.css';

const TASKS = [
  {
    id: 1,
    status: 'New Order',
    time: '8 hrs',
    days: '5 days left',
  },
  {
    id: 2,
    status: 'In Progress',
    time: '6 hrs',
    days: '6 days left',
    done: false,
  },
  {
    id: 3,
    status: 'Completed',
    time: '13 hrs',
    days: '4 days left',
  },
  {
    id: 4,
    status: 'New Order',
    time: '22 hrs',
    days: '2 days left',
    done: true,
  },
  {
    id: 5,
    status: 'In Progress',
    time: '2 hrs',
    days: '1 day left',
    newOrder: true,
    done: false,
  },
  {
    id: 6,
    status: 'Completed',
    time: '20 hrs',
    days: '11 days left',
    done: true,
  },
  {
    id: 7,
    status: 'Delivered',
    time: '2 hrs',
    days: '1 day left',
    done: false,
  },
];

class Main extends React.Component {
  state = { tasks: [] };

  componentDidMount() {
    const { tasks }: any = this.props;
    this.setState({
      tasks: TASKS,
    });
  }

  onDragStart = (evt: any) => {
    const element = evt.currentTarget;
    element.classList.add('dragged');
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = 'move';
  };

  onDragEnd = (evt: any) => {
    evt.currentTarget.classList.remove('dragged');
  };

  onDragEnter = (evt: any) => {
    evt.preventDefault();
    const element = evt.currentTarget;
    element.classList.add('dragged-over');
    evt.dataTransfer.dropEffect = 'move';
  };

  onDragLeave = (evt: any) => {
    const { currentTarget } = evt;
    const newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget) { return; }
    evt.preventDefault();
    const element = evt.currentTarget;
    element.classList.remove('dragged-over');
  };

  onDragOver = (evt: any) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  };

  onDrop = (evt: any, value: any, status: any) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove('dragged-over');
    const data = evt.dataTransfer.getData('text/plain');
    const { tasks } = this.state;
    console.log('data', data, status);
    const updated = tasks.map((task: any) => {
      if (task.id.toString() === data.toString()) {
        task.status = status;
      }

      return task;
    });
    this.setState({ tasks: updated });
  };

  render() {
    const { tasks } = this.state;
    console.log('tasks', tasks);
    const pending = tasks.filter((data: any) => data.status === 'In Progress');
    const done = tasks.filter((data: any) => data.status === 'Completed');
    const newOrder = tasks.filter((data: any) => data.status === 'New Order');
    const waiting = tasks.filter((data: any) => data.status === 'Delivered');

    return (
    // <div className="App">
      <div className="container1">
        <div
          className="order small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, 'New Order')}
        >
          <section className="drag_container">
            <div className="container1">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Todo List</h4>
                  <button style={{ width: '100%' }}>+</button>
                  {newOrder.map((task: any) => (
                    <div
                      className="card"
                      key={task.id}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div
          className="pending small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, false, 'In Progress')}
        >
          <section className="drag_container">
            <div className="container1">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>In Progress</h4>
                  <button style={{ width: '100%' }}>+</button>
                  {pending.map((task: any) => (
                    <div
                      className="card"
                      key={task.id}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>

                    </div>

                  ))}

                </div>
              </div>
            </div>
          </section>
        </div>

        <div
          className="done small-box"
          onDragLeave={(e) => this.onDragLeave(e)}
          onDragEnter={(e) => this.onDragEnter(e)}
          onDragEnd={(e) => this.onDragEnd(e)}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, true, 'Completed')}
        >
          <section className="drag_container">
            <div className="container1">
              <div className="drag_column">
                <div className="drag_row">
                  <h4>Completed</h4>
                  <button style={{ width: '100%' }}>+</button>
                  {done.map((task: any) => (
                    <div
                      className="card"
                      key={task.id}
                      id={task.id}
                      draggable
                      onDragStart={(e) => this.onDragStart(e)}
                      onDragEnd={(e) => this.onDragEnd(e)}
                    >
                      <div className="card_right">
                        <div className="status">{task.status}</div>
                        <div className="days">{task.time}</div>
                        <div className="time">{task.days}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    // </div>

    );
  }
}

export default Main;
