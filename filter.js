function save_options() {

    if (document.getElementById('s4m').checked) {
        chrome.storage.sync.set({
          s4m: true
        });
      } else {
        chrome.storage.sync.set({
            s4m: false
          });
      }

    if (document.getElementById('male').checked) {
      chrome.storage.sync.set({
        terribleNames: ["Chad", "Zachary", "Kyle"]
      });
    } else if (document.getElementById('female').checked) {
      chrome.storage.sync.set({
        terribleNames: ['Mariah','Jessica', 'Jess', 'Emily', 'Alex', 'Emma', 'Sarah']
      });
    } else if (document.getElementById('both').checked) {
      chrome.storage.sync.set({
        terribleNames: ["Chad", "Zachary", "Kyle", 'Mariah','Jessica', 'Jess', 'Emily', 'Alex' ]
      });
    }
    chrome.tabs.executeScript({
        file : 'swiper.js'
      });
    
    window.close();
}

document.getElementById('go').addEventListener('click', save_options);