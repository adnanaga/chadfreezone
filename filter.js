function save_options() {
    if (document.getElementById('auto').checked) {
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
        terribleNames: ['Kyle', 'Matt', 'Chad', 'Zachary'],
        selection: 'male-default'
      });
    } else if (document.getElementById('female').checked) {
      chrome.storage.sync.set({
        terribleNames: ['Jessica', 'Emily', 'Katherine', 'Alex'],
        selection: 'female-default'
      });
    } else if (document.getElementById('both').checked) {
      chrome.storage.sync.set({
        terribleNames: ['Kyle', 'Matt', 'Chad', 'Zachary', 'Jessica', 'Emily', 'Katherine', 'Alex'],
        selection: 'both-default'
      });
    } else if (document.getElementById('custom').checked) {
      chrome.storage.sync.set({
        selection: 'custom',
        terribleNames: get_names()
      });
    }
    chrome.tabs.executeScript({
        file : 'swiper.js'
      });
    
    window.close();
}

document.getElementById('go').addEventListener('click', save_options);

function get_names() {
    // custom user inputed names
    var names = document.getElementById('terrible_names').value.replace(/\s/g,'');
    var terribleNames = names.split(',');
    return terribleNames;
}

document.getElementById('custom').addEventListener('click', () => {
    document.getElementById('names-elem').className = 'dropdown-content-open'; 
});

function display_options() {
    chrome.storage.sync.get(["selection", "terribleNames", "s4m"], function(result) {
        selection = result.selection;
        terribleNames = result.terribleNames;
        s4m = result.s4m;

        if (selection === undefined ) return;

        switch(selection){
            case 'male-default':
                document.getElementById('male').checked = true;
                break;
            case 'female-default':
                document.getElementById('female').checked = true;
                break;
            case 'both-default':
                document.getElementById('both').checked = true;
                break;
            case 'custom':
                document.getElementById('custom').checked = true;
                document.getElementById('names-elem').className = 'dropdown-content-open';
                document.getElementById('terrible_names').value = terribleNames.toString();
                break;
            default:
                break;
        }
        document.getElementById('auto').checked = s4m;
        document.getElementById('user').checked = !s4m;
    });
}

window.onload = display_options()
