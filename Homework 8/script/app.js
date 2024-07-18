const rooms = Array(15).fill(null);
        
const roomSelect = document.getElementById('roomNumber');
const guestList = document.getElementById('guestList');
const registrationForm = document.getElementById('registrationForm');
const guestNameInput = document.getElementById('guestName');

function updateRoomOptions() {
    roomSelect.innerHTML = '';
    rooms.forEach((guest, index) => {
        const option = document.createElement('option');
        option.value = index + 1;
        option.text = 'Xona ' + (index + 1);
        if (guest) {
            option.disabled = true;
        }
        roomSelect.appendChild(option);
    });
}

function renderGuestList() {
    guestList.innerHTML = '';
    rooms.forEach((guest, index) => {
        if (guest) {
            const listItem = document.createElement('li');
            listItem.textContent = `${guest} (Xona ${index + 1})`;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'O\'chirish';
            removeBtn.onclick = () => {
                rooms[index] = null;
                updateRoomOptions();
                renderGuestList();
            };
            listItem.appendChild(removeBtn);
            guestList.appendChild(listItem);
        }
    });
}

registrationForm.onsubmit = (e) => {
    e.preventDefault();
    const guestName = guestNameInput.value;
    const roomNumber = parseInt(roomSelect.value) - 1;
    rooms[roomNumber] = guestName;
    guestNameInput.value = '';
    updateRoomOptions();
    renderGuestList();
};

updateRoomOptions();

