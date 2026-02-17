const fs = require('fs');

function saveNotes() {
  const content = document.getElementById('notes').value;

  fs.writeFile('notes.txt', content, (err) => {
    if (err) {
      alert('Error saving file');
    } else {
      alert('Notes saved successfully!');
    }
  });
}