const app = document.querySelector('#app');

document.title = 'ClassResources';

app.innerHTML = `
  <main class="scene">
    <div class="orb one"></div>
    <div class="orb two"></div>
    <div class="orb three"></div>

    <section class="glass-card" aria-label="ClassResources deployment notice">
      <div class="shine"></div>
      <div class="eyebrow">classresources.ca</div>
      <div class="card-row">
        <div class="card-copy">
          <h1>
            <span class="headline-bottom">Wait for Guransh Dhaliwal to make another great website!</span>
          </h1>
          <div class="footer-note">
            <strong>Deployment status:</strong>
            <span>Still waiting on the next launch.</span>
          </div>
        </div>
        <aside class="timer-panel" aria-label="Countdown timer">
          <div class="timer-value">0:00</div>
          <div class="timer-label">timer for the next project release</div>
          <div class="timer-note">not on yet because there are no projects yet</div>
        </aside>
      </div>
    </section>
  </main>
`;
