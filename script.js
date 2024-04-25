const powerOffButton = document.getElementById('power-off');
const resetButton = document.getElementById('reset');
// Προσθέτουμε ακροατές συμβάντων για το κάθε κουμπί//
powerOffButton.addEventListener('click', function() {
    alert('Η συσκευή θα τεθεί εκτός λειτουργίας.');
});
resetButton.addEventListener('click', function() {
    alert('Η συσκευή θα επανεκκινήσει.');
});
