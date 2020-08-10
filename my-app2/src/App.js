import React from 'react';
import './App.css';
import Box from './Box';
import Circle from './Circle';
import FakeLoading from './FakeLoading';
import Notification from './Notification';
import StopWatch from './StopWatch';

const defaultRatio = 0.15;
export default function App() {
  const [ratio, setRatio] = React.useState(defaultRatio);
  const [notificationMessage, setNotificationMessage] = React.useState(
    "Hello notification"
  );

  return (
    <div className="App">
      <section>
        <h1>Задание 1 Fake Loading</h1>

        <FakeLoading />
      </section>

      <section>
        <h1>Задание 2 Notification</h1>
        <div style={{ marginBottom: 20 }}>
          <input
            placeholder="Notifaiction message"
            type="text"
            onChange={e => setNotificationMessage(e.target.value)}
          />
        </div>
        <Notification message={notificationMessage} delay={1500} />
      </section>

      <section>
        <h1>Задание 3 StopWatch</h1>
        <StopWatch />
      </section>

      <section>
        <h1>Задание 4 Resizer</h1>
        <label>
          Ratio:
          <input
            type="number"
            min={0.1}
            step={0.05}
            max={1}
            defaultValue={defaultRatio}
            onChange={e => setRatio(e.target.valueAsNumber)}
          />
        </label>

        <Box ratio={ratio} />

        <Circle ratio={ratio} />
      </section>
    </div>
  );
}