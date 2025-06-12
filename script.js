function openTab(evt, tabId) {
      const tabContents = document.querySelectorAll('.tab-content');
      const tabLinks = document.querySelectorAll('.tablink');

      tabContents.forEach(tab => tab.classList.remove('active'));
      tabLinks.forEach(btn => btn.classList.remove('active'));

      document.getElementById(tabId).classList.add('active');
      evt.currentTarget.classList.add('active');
    }